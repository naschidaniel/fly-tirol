export function useData() {
  const buildTime = process.env.buildTime
  const instagram = process.env.instagram
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isFlyTirol = process.env.isFlyTirol
  const isWhiteCloud = process.env.isWhiteCloud
  const licenses = process.env.licenses
  const mail = process.env.mail
  const phone = process.env.phone
  const phoneString = process.env.phoneString
  const website = process.env.website
  const websiteUrl = process.env.websiteUrl

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
