export function useData() {
  const buildTime = process.env.buildTime
  const isFlyTirol = process.env.NUXT_PAGE === 'flytirol'
  const isWhiteCloud = process.env.NUXT_PAGE === 'whitecloud'

  return {
    buildTime,
    isFlyTirol,
    isWhiteCloud,
  }
}
