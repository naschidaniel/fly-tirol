import { useRuntimeConfig } from '#app'
import { License } from '~~/types/data'

export function useData() {
  const config = useRuntimeConfig()

  const buildTime: number = config.public.buildTime
  const instagram: string = config.public.instagram
  const isDevelopment: boolean = config.public.isDevelopment
  const isFlyTirol: boolean = config.public.isFlyTirol
  const isWhiteCloud: boolean = config.public.isWhiteCloud
  const licenses: License[] = config.public.licenses
  const mail: string = config.public.mail
  const phone: string = config.public.phone
  const phoneString: string = config.public.phoneString
  const website: string = config.public.website
  const websiteUrl: string = config.public.websiteUrl

  return {
    buildTime,
    instagram,
    isDevelopment,
    isFlyTirol,
    isWhiteCloud,
    licenses,
    mail,
    phone,
    phoneString,
    website,
    websiteUrl,
  }
}