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
  const isGh2di: boolean = config.public.isGh2di
  const isBikeAndFly: boolean = config.public.isBikeAndFly
  const licenses: License[] = config.public.licenses as License[]
  const mail: string = config.public.mail
  const phone: string = config.public.phone
  const phoneString: string = config.public.phoneString
  const website: string = config.public.website
  const websiteUrl: string = config.public.websiteUrl
  const xing: string = config.public.xing
  const youtube: string = config.public.youtube

  return {
    backend,
    buildTime,
    instagram,
    isDevelopment,
    isFlyTirol,
    isBikeAndFly,
    isHydrogen,
    isGh2di,
    licenses,
    mail,
    phone,
    phoneString,
    website,
    websiteUrl,
    xing,
    youtube,
  }
}
