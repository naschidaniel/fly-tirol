import { useRuntimeConfig } from '#app'
import { mediaFlyTirol, mediaBikeAndFly } from '@/data'

export function useMedia() {
  const config = useRuntimeConfig()
  const isFlyTirol = config.public.isFlyTirol

  const media = isFlyTirol ? mediaFlyTirol : mediaBikeAndFly

  return {
    media,
  }
}
