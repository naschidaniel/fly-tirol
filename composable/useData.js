import { computed, ref } from '@nuxtjs/composition-api'
import { useMedia } from './useMedia'

const allCookies = ref({})
export const isCookieAgreement = ref(false)
const isOpen = ref(false)

export function useData() {
  const buildtime = computed(() =>
    process.env?.NUXT_ENV_CURRENT_DATE === undefined
      ? undefined
      : Date.parse(process.env.NUXT_ENV_CURRENT_DATE)
  )

  const media = useMedia()
  return {
    ...media,
    allCookies,
    buildtime,
    isCookieAgreement,
    isOpen,
  }
}
