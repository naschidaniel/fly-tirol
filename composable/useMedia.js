import { onMounted, ref } from '@nuxtjs/composition-api'
import mediaFlyTirol from '~/static_flytirol/media.json'
import mediaWhiteCloud from '~/static_whitecloud/media.json'

const media = process.env.NUXT_PAGE === 'whitecloud' ? mediaWhiteCloud : mediaFlyTirol

const isWebpSupported = ref(undefined)

export function useMedia() {
  function setWebPSupport(value) {
    if (value === true) {
      // eslint-disable-next-line no-console
      console.info('WebP is supported by the browser')
    } else {
      // eslint-disable-next-line no-console
      console.warn('WebP is not supported by the browser')
    }
    isWebpSupported.value = value
  }

  function canUseWebP() {
    if (isWebpSupported.value !== undefined) {
      return
    }
    const isFirefoxVersionSupported =
      parseInt(navigator.userAgent?.split('Firefox/')[1]) >= 65.0
    if (isFirefoxVersionSupported) {
      isWebpSupported.value = true
      return
    }

    const elem = document.createElement('canvas')
    if (elem.getContext && elem.getContext('2d')) {
      isWebpSupported.value =
        elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
      return
    }
    isWebpSupported.value = false
  }

  function getScreenSize() {
    const width = window?.innerWidth
    const tailwindCssScreenSizes = {
      '2xs': 384,
      xs: 512,
      sm: 640,
      md: 768,
      lg: 1080,
      xl: 1280,
      '2xl': 1536,
    }
    const screenSize =
      width <= tailwindCssScreenSizes['2xs']
        ? '2xs'
        : width <= tailwindCssScreenSizes.xs
        ? 'xs'
        : width <= tailwindCssScreenSizes.sm
        ? 'sm'
        : width <= tailwindCssScreenSizes.md
        ? 'md'
        : width <= tailwindCssScreenSizes.lg
        ? 'lg'
        : width <= tailwindCssScreenSizes.xl
        ? 'xl'
        : '2xl'
    return screenSize
  }

  onMounted(() => {
    canUseWebP()
  })

  return {
    isWebpSupported,
    media,
    getScreenSize,
    setWebPSupport,
  }
}
