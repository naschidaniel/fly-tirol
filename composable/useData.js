import {useRuntimeConfig} from '#imports'

export function useData() {
  const config = useRuntimeConfig()

  const buildTime = config.buildTime
  const instagram = config.instagram
  const isDevelopment = config.NODE_ENV === 'development'
  const isFlyTirol = config.isFlyTirol
  const isWhiteCloud = config.isWhiteCloud
  const licenses = config.licenses
  const mail = config.mail
  const phone = config.phone
  const phoneString = config.phoneString
  const website = config.website
  const websiteUrl = config.websiteUrl

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
