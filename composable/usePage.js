import { computed } from 'vue'
import { useData } from './useData.js'
import { metadataFlyTirol, metadataWhiteCloud } from '~/data'
import { useRoute } from '#imports'

export function usePage() {
  const route = useRoute()
  // const context = useContext()
  const { isFlyTirol } = useData()

  const metadataPages = isFlyTirol ? metadataFlyTirol : metadataWhiteCloud

  const routeFullPath = `${route.fullPath.split('?')[0]}/`.replace('//', '/')
  if (metadataPages.find((p) => p.path === routeFullPath) === undefined) {
    throwError({ statusCode: 404, message: 'Page not Found' })
    // context.error({ statusCode: 404, message: 'Post not found' })
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

  const isCourse = computed(() => !page.value.path?.includes('/tandemfliegen'))

  const pages = computed(() => {
    const routeName = route.name
    return metadataPages
      .filter((p) => p.category === routeName && p.slug !== 'index')
      .sort((a, b) => a.order - b.order)
  })

  function getMetadata(path) {
    return metadataPages.find((p) => p.path === path)
  }
  return { isCourse, getMetadata, page, pages }
}
