<template>
  <div ref="imageBox" :class="boxClass">
    <img
      v-if="responsiveUrl != ''"
      :loading="isLazy ? 'lazy' : 'auto'"
      :class="imgClass"
      :src="responsiveUrl"
      :width="width"
      :height="height"
      :alt="imageInformation['alt']"
      :title="imageInformation['title']"
    />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from '@vue/composition-api'
import { useData } from '~/composable/useData'
import { useMedia } from '~/composable/useMedia'

export default defineComponent({
  props: {
    boxClass: { type: String, default: '', required: false },
    picture: { type: String, default: '', required: true },
    imgClass: { type: String, default: '', required: false },
    fixSize: { type: String, default: undefined, required: false },
    isLazy: { type: Boolean, default: true, required: false },
    isThumbnail: { type: Boolean, default: false, required: false },
  },
  setup(props) {
    const { buildTime } = useData()
    const { devicePixelRatio, isWebpSupported, media } = useMedia()

    const imageBox = ref(null) // template ref
    const imageSizeTailwindClass = ref(undefined)
    const width = ref(undefined)
    const height = ref(undefined)
    const boxSizes = {
      '2xs': 384,
      xs: 512,
      sm: 640,
      md: 768,
      lg: 1080,
      xl: 1280,
      '2xl': 1536,
    }

    const imageInformation = computed(() => {
      const images = Object.values(media).filter((img) => {
        return img.url === props.picture
      })
      if (images.length === 0) {
        // eslint-disable-next-line no-console
        console.warn(
          `The image '${props.picture}' can not be found in the /media.json file. You have to run ./generateMediaInformation.js.`
        )
      }
      return images.length === 1
        ? images[0]
        : { alt: '', title: '', url: props.picture, dimensions: undefined }
    })

    const responsiveUrl = computed(() => {
      const extension = imageInformation.value.url?.split('.')?.reverse()[0]
      if (process.env.NODE_ENV === 'development1' || extension === undefined) {
        return `${imageInformation.value.url}?v=${buildTime}`
      }
      if (
        props.fixSize === undefined &&
        imageSizeTailwindClass.value === undefined
      ) {
        return ''
      }
      const filePostFix =
        props.fixSize && props.isThumbnail
          ? `${props.fixSize}_thumbnail.${extension}`
          : props.fixSize && !props.isThumbnail
          ? `${props.fixSize}.${extension}`
          : props.isThumbnail
          ? `${imageSizeTailwindClass.value}_thumbnail.${extension}`
          : `${imageSizeTailwindClass.value}.${extension}`

      let responsiveUrl = imageInformation.value.url.replace(
        `.${extension}`,
        `_${filePostFix}`
      )
      if (isWebpSupported.value) {
        responsiveUrl = responsiveUrl.replace(`.${extension}`, '.webp')
      }
      return `${responsiveUrl}?v=${buildTime}`
    })

    function getImageSizeTailwindClass() {
      const imageBoxWidth = imageBox.value?.clientWidth
      const imageSize = imageBoxWidth * devicePixelRatio.value
      imageSizeTailwindClass.value =
        imageSize <= boxSizes['2xs']
          ? '2xs'
          : imageSize <= boxSizes.xs
          ? 'xs'
          : imageSize <= boxSizes.sm
          ? 'sm'
          : imageSize <= boxSizes.md
          ? 'md'
          : imageSize <= boxSizes.lg
          ? 'lg'
          : imageSize <= boxSizes.xl
          ? 'xl'
          : '2xl'
      width.value = boxSizes[imageSizeTailwindClass.value]
      height.value = props.isThumbnail
        ? width.width
        : Math.round(
            boxSizes[imageSizeTailwindClass.value] /
              imageInformation.value?.dimensions?.ratio
          )
    }

    return {
      getImageSizeTailwindClass,
      height,
      imageBox,
      imageInformation,
      responsiveUrl,
      width,
    }
  },
  mounted() {
    this.getImageSizeTailwindClass()
  },
})
</script>
