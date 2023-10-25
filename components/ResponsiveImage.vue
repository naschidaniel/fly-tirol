<template>
  <div ref="imageBox" :class="boxClass">
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <picture>
        <source
          :sizes="pic.sizes"
          :srcset="pic.srcsetsWebp"
          type="image/webp"
        />
        <source :srcset="pic.srcsets" type="image/jpeg" />
        <img
          :loading="isLazy ? 'lazy' : 'eager'"
          :class="imgClass"
          :src="pic.fallback.src"
          :alt="pic.fallback.alt"
          :height="pic.fallback.height"
          :width="pic.fallback.width"
          :title="pic.fallback.title"
        />
      </picture>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { MediaInformation } from '@/types/data'
import { useData } from '@/composable/useData'
import { useMedia } from '~~/composable/useMedia'

interface ResponsiveSourceInterface {
  height: number
  sizes: string
  srcset: string
  srcsetWebp: string
  width: number
}

class ResponsiveSource implements ResponsiveSourceInterface {
  height: number
  sizes: string
  srcset: string
  srcsetWebp: string
  width: number

  constructor(
    buildTime: number,
    image: MediaInformation,
    width: number,
    viewport: number,
    isThumbnail: boolean,
  ) {
    const prefix = `${image.path}${image.stem}`
    const postfix = isThumbnail
      ? `thumbnail_${width}.${image.dimensions.type}`
      : `${width}.${image.dimensions.type}`
    const postfixWebp = postfix.replace(image.dimensions.type, 'webp')
    this.srcset = `${prefix}_${postfix}?v=${buildTime} ${width}w`
    this.srcsetWebp = `${prefix}_${postfixWebp}?v=${buildTime} ${width}w`
    this.width = width
    this.height = isThumbnail
      ? width
      : Math.round(width / image.dimensions.ratio)
    this.sizes = `(max-width: ${width}px) ${viewport}vw`
  }
}

interface ResponsiveImage {
  srcsets: string
  srcsetsWebp: string
  sizes: string
  fallback: {
    alt: string
    title: string
    src: string
    width: number
    height: number
  }
}

const props = defineProps({
  boxClass: { type: String, default: '', required: false },
  picture: { type: String, default: '', required: true },
  imgClass: { type: String, default: '', required: false },
  isLazy: { type: Boolean, default: true, required: false },
  isPreload: { type: Boolean, default: false, required: false },
  isThumbnail: { type: Boolean, default: false, required: false },
})
const { buildTime } = useData()
const { media } = useMedia()

// see https://vuejs.org/guide/essentials/template-refs.html#accessing-the-refs
const imageBox = ref(null) // template ref

const image = Object.values(media).find(
  (img) => img.url === props.picture,
) as MediaInformation

const pic: ResponsiveImage = reactive({
  srcsets: '',
  srcsetsWebp: '',
  sizes: '',
  fallback: {
    alt: image.alt,
    title: image.title,
    src: image.url,
    width: image.dimensions.width,
    height: image.dimensions.height,
  },
})

const setImage = function () {
  if (image === undefined) {
    // eslint-disable-next-line no-console
    console.warn(
      `The image '${props.picture}' can not be found in the /media.json file. You have to run ./generateMediaInformation.js.`,
    )
  } else {
    const sourcesets: ResponsiveSource[] = []
    // TODO viewport is not rendered after reload
    const viewport =
      // @ts-ignore
      imageBox.value?.clientWidth !== 0
        ? // @ts-ignore
          Math.ceil((imageBox.value?.clientWidth / window?.innerWidth) * 100)
        : 100
    for (const width of [384, 512, 640, 768, 1024, 1280, 1536]) {
      sourcesets.push(
        new ResponsiveSource(
          buildTime,
          image,
          width,
          viewport,
          props.isThumbnail,
        ),
      )
    }
    pic.srcsets = sourcesets.map((s) => s.srcset).join(', ')
    pic.srcsetsWebp = sourcesets.map((s) => s.srcsetWebp).join(', ')
    pic.sizes = sourcesets.map((s) => s.sizes).join(', ')
  }
}

watchEffect(() => {
  if (imageBox.value) {
    setImage()
    // useHead({
    //   link: [
    //     {
    //       rel: 'preload',
    //       as: 'image',
    //       type: `image/webp`,
    //       href: pic.srcsetsWebp,
    //     },
    //   ],
    // })
  }
})
</script>
