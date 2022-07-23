import { computed, ComputedRef } from 'vue'
import { useData } from './useData'
import { metadataFlyTirol, metadataWhiteCloud } from '@/data'
import { useRoute, throwError } from '#imports'
import { MetaData } from '~~/types/data'

export function usePage() {
  const route = useRoute()
  const { isFlyTirol } = useData()

  const metadataPages = isFlyTirol ? metadataFlyTirol : metadataWhiteCloud

  const routeFullPath = `${route.fullPath.split('?')[0]}/`.replace('//', '/')
  if (metadataPages.find((p) => p.path === routeFullPath) === undefined) {
    throwError('Page not Found')
    // context.error({ statusCode: 404, message: 'Post not found' })
  }
  const page: ComputedRef<MetaData> = computed(() => {
    return (
      metadataPages.find((p) => p.path === routeFullPath) || {
        slug: '',
        title: '',
        description: '',
      } as MetaData
    )
  })

  const isCourse = computed(() => !page.value.path?.includes('/tandemfliegen'))

  const pages: ComputedRef<MetaData[]> = computed(() => {
    return metadataPages
      .filter((p) => p.category === route.name && p.slug !== 'index')
      .sort((a, b) => a.order - b.order)
  })

  function getMetadata(path: string): MetaData {
    return metadataPages.find((p) => p.path === path)
  }
  return { isCourse, getMetadata, page, pages }
}
