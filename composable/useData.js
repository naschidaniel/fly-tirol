export function useData() {
  const buildTime = process.env.buildTime
  const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
  const isWhiteCloud = process.env.NUXT_PAGE === 'whitecloud'
  const licenses = process.env.licenses

  return {
    buildTime,
    isFlyTirol,
    isWhiteCloud,
    licenses,
  }
}
