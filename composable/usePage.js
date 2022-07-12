import { computed } from 'vue'
import { useRoute, useContext } from '@nuxtjs/composition-api'
import { useData } from './useData'
import { metadataFlyTirol, metadataWhiteCloud } from '~/data'

export function usePage() {
  const route = useRoute()
  const context = useContext()
  const { isFlyTirol, isWhiteCloud } = useData()

  const metadataPages = isFlyTirol ? metadataFlyTirol : metadataWhiteCloud

  const routeFullPath = `${route.value.fullPath.split('?')[0]}/`.replace(
    '//',
    '/'
  )
  if (metadataPages.find((p) => p.path === routeFullPath) === undefined) {
    context.error({ statusCode: 404, message: 'Post not found' })
  }
  const page = computed(() => {
    return (
      metadataPages.find((p) => p.path === routeFullPath) || {
        slug: '',
        title: '',
        description: '',
      }
    )
  })

  const isCourse = isWhiteCloud
    ? false
    : !page.value.path?.includes('/tandemfliegen')

  const pages = computed(() => {
    const routeName = route.value.name
    return metadataPages
      .filter((p) => p.category === routeName && p.slug !== 'index')
      .sort((a, b) => a.order - b.order)
  })
  return { isCourse, page, pages }
}
