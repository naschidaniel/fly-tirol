import { onMounted, ref } from '@nuxtjs/composition-api'
import media from '~/static/media.json'

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

  onMounted(() => {
    canUseWebP()
  })

  return {
    isWebpSupported,
    media,
    setWebPSupport,
  }
}
