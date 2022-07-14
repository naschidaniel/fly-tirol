import { useRuntimeConfig } from '#app'

export function useData() {
  const config = useRuntimeConfig()

  const buildTime = config.public.buildTime
  const instagram = config.public.instagram
  const isDevelopment = config.public.isDevelopment
  const isFlyTirol = config.public.isFlyTirol
  const isWhiteCloud = config.public.isWhiteCloud
  const licenses = config.public.licenses
  const mail = config.public.mail
  const phone = config.public.phone
  const phoneString = config.public.phoneString
  const website = config.public.website
  const websiteUrl = config.public.websiteUrl

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
