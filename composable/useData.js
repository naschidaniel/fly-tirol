export function useData() {
  const buildTime = process.env.buildTime

  return {
    buildTime,
  }
}
