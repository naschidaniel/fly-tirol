import { onMounted, ref, Ref } from 'vue'
import {mediaFlyTirol, mediaWhiteCloud} from '@/data'

import { useRuntimeConfig } from '#app'

export function useMedia() {
  const devicePixelRatio: Ref<number | undefined> = ref(undefined)

  const config = useRuntimeConfig()
  const isFlyTirol = config.public.isFlyTirol

  const media = isFlyTirol ? mediaFlyTirol : mediaWhiteCloud

  function setDevicePixelRatio(): void {
    devicePixelRatio.value = window && window?.devicePixelRatio > 1.5 ? 2 : 1
  }

  function getScreenSize(): "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" {
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
    setDevicePixelRatio()
  })

  return {
    devicePixelRatio,
    media,
    getScreenSize,
  }
}
