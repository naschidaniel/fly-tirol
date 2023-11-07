import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useData } from './useData'
import { metadataFlyTirol, metadataWhiteCloud } from '@/data'
import { useRoute, showError } from '#imports'
import type { MetaData } from '~/types/data'

export function usePage() {
  const route = useRoute()
  const { isFlyTirol } = useData()

  const metadataPages = isFlyTirol ? metadataFlyTirol : metadataWhiteCloud

  const routeFullPath = `${route.fullPath.split('?')[0]}/`.replace('//', '/')
  if (metadataPages.find((p) => p.path === routeFullPath) === undefined) {
    showError('Page not Found')
  }
  const page: ComputedRef<MetaData> = computed(() => {
    return (
      metadataPages.find((p) => p.path === routeFullPath) ||
      ({
        slug: '',
        title: '',
        description: '',
      } as MetaData)
    )
  })

  const isService = computed(() => page.value.path?.includes('/service'))
  const isCourse = computed(
    () =>
      !page.value.path?.includes('/tandemfliegen') &&
      !page.value.path?.includes('/service'),
  )

  const pages: ComputedRef<MetaData[]> = computed(() => {
    return metadataPages
      .filter((p) => p.category === route.name && p.slug !== 'index')
      .sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a?.order - b?.order
        } else {
          return 9999
        }
      })
  })

  function getMetadata(path: string): MetaData {
    return metadataPages.find((p) => p.path === path) as MetaData
  }
  return { isCourse, isService, getMetadata, page, pages }
}
