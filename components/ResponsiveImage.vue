<template>
  <div ref="imageBox" :class="boxClass">
    <picture>
      <source
        v-if="!isDevelopment"
        :srcset="responsiveUrlWebp"
        type="image/webp"
      />
      <source :srcset="responsiveUrl" type="image/jpeg" />
      <img
        v-if="responsiveUrl != ''"
        :loading="isLazy ? 'lazy' : 'eager'"
        :class="imgClass"
        :src="responsiveUrl"
        :width="width"
        :height="height"
        :alt="imageInformation['alt']"
        :title="imageInformation['title']"
      />
    </picture>
  </div>
</template>

<script setup>
// TODO NUXT3
// eslint-disable-next-line import/named
import { defineProps, computed, ref, onMounted } from 'vue'
import { useData } from '~/composable/useData'
import { useMedia } from '~/composable/useMedia'

const props = defineProps({
  boxClass: { type: String, default: '', required: false },
  picture: { type: String, default: '', required: true },
  imgClass: { type: String, default: '', required: false },
  fixSize: { type: String, default: undefined, required: false },
  isLazy: { type: Boolean, default: true, required: false },
  isPreload: { type: Boolean, default: false, required: false },
  isThumbnail: { type: Boolean, default: false, required: false },
})
const { buildTime, isDevelopment } = useData()
const { devicePixelRatio, media } = useMedia()

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

const extension = imageInformation.value?.dimensions?.type
const responsiveUrl = computed(() => {
  if (!imageSizeTailwindClass.value) return ''
  if (isDevelopment) {
    return `${imageInformation.value.url}?v=${buildTime}`
  }
  const filePostFix =
    props.fixSize && props.isThumbnail
      ? `${props.fixSize}_thumbnail.${extension}`
      : props.fixSize && !props.isThumbnail
      ? `${props.fixSize}.${extension}`
      : props.isThumbnail
      ? `${imageSizeTailwindClass.value}_thumbnail.${extension}`
      : `${imageSizeTailwindClass.value}.${extension}`

  return imageInformation.value.url.replace(
    `.${extension}`,
    `_${filePostFix}?v=${buildTime}`
  )
})

const responsiveUrlWebp = computed(() => {
  return responsiveUrl.value.replace(extension, 'webp')
})

const responsiveTagType = computed(() => {
  return props.isPreload && !isDevelopment
    ? 'image/webp'
    : props.isPreload
    ? extension
    : ''
})

const responsiveTagUrl = computed(() => {
  return props.isPreload && !isDevelopment
    ? responsiveUrlWebp.value
    : props.isPreload
    ? responsiveUrl.value
    : ''
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
    ? width.value
    : Math.round(width.value / imageInformation.value?.dimensions?.ratio)
}

onMounted(() => {
  getImageSizeTailwindClass()
})

// TODO NUXT3
// useMeta(() => ({
//   link: [
//     {
//       rel: 'preload',
//       as: 'image',
//       type: `${responsiveTagType.value}`,
//       href: `${responsiveTagUrl.value}`,
//     },
//   ],
// }))
</script>
