import { useRuntimeConfig } from '#app'
import { mediaFlyTirol, mediaHydrogen, mediaBikeAndFly } from '@/data'

export function useMedia() {
  const config = useRuntimeConfig()
  const isFlyTirol = config.public.isFlyTirol
  const isHydrogen = config.public.isHydrogen

  const media = isFlyTirol
    ? mediaFlyTirol
    : isHydrogen
      ? mediaHydrogen
      : mediaBikeAndFly

  return {
    media,
  }
}
