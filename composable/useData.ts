import { useRuntimeConfig } from '#app'
import type { License } from '@/types/data'

export function useData() {
  const config = useRuntimeConfig()

  const backend: string = config.public.backend
  const buildTime: number = config.public.buildTime
  const instagram: string = config.public.instagram
  const isDevelopment: boolean = config.public.isDevelopment
  const isFlyTirol: boolean = config.public.isFlyTirol
  const isHydrogen: boolean = config.public.isHydrogen
  const isBikeAndFly: boolean = config.public.isBikeAndFly
  const licenses: License[] = config.public.licenses as License[]
  const mail: string = config.public.mail
  const phone: string = config.public.phone
  const phoneString: string = config.public.phoneString
  const website: string = config.public.website
  const websiteUrl: string = config.public.websiteUrl

  return {
    backend,
    buildTime,
    instagram,
    isDevelopment,
    isFlyTirol,
    isBikeAndFly,
    isHydrogen,
    licenses,
    mail,
    phone,
    phoneString,
    website,
    websiteUrl,
  }
}
