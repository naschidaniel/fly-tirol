import { useRuntimeConfig } from '#app'
import { mediaFlyTirol, mediaHydrogen, mediaBikeAndFly, mediaGh2di } from '@/data'

export function useMedia() {
  const config = useRuntimeConfig()
  const isFlyTirol = config.public.isFlyTirol
  const isHydrogen = config.public.isHydrogen
  const isGh2di = config.public.isGh2di

  const media = isFlyTirol
    ? mediaFlyTirol
    : isGh2di
      ? mediaGh2di
      : isHydrogen
        ? mediaHydrogen
        : mediaBikeAndFly

  return {
    media,
  }
}
