import { useRuntimeConfig } from '#app'
import { mediaFlyTirol, mediaWhiteCloud } from '@/data'

export function useMedia() {
  const config = useRuntimeConfig()
  const isFlyTirol = config.public.isFlyTirol

  const media = isFlyTirol ? mediaFlyTirol : mediaWhiteCloud

  return {
    media,
  }
}
