import { computed } from 'vue'
import { useRoute, useContext } from '@nuxtjs/composition-api'
import metadataFlyTirol from '~/public_flytirol/metadata.json'
import metadataWhiteCloud from '~/public_whitecloud/metadata.json'

const metadata = process.env.isWhiteCloud
  ? metadataWhiteCloud
  : metadataFlyTirol

export function usePage() {
  const route = useRoute()
  const context = useContext()

  const routeFullPath = `${route.value.fullPath.split('?')[0]}/`.replace(
    '//',
    '/'
  )
  if (metadata.find((p) => p.path === routeFullPath) === undefined) {
    context.error({ statusCode: 404, message: 'Post not found' })
  }
  const page = computed(() => {
    return (
      metadata.find((p) => p.path === routeFullPath) || {
        slug: '',
        title: '',
        description: '',
      }
    )
  })

  const pages = computed(() => {
    const routeName = route.value.name
    return metadata
      .filter((p) => p.category === routeName && p.slug !== 'index')
      .sort((a, b) => a.order - b.order)
  })
  return { page, pages }
}
