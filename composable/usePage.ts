import { computed, ComputedRef } from 'vue'
import { useData } from './useData'
import { metadataFlyTirol, metadataWhiteCloud } from '@/data'
import { useRoute, showError } from '#imports'
import { MetaData } from '~/types/data'

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

  const isCourse = computed(() => !page.value.path?.includes('/tandemfliegen'))

  const pages: ComputedRef<MetaData[]> = computed(() => {
    return metadataPages
      .filter((p) => p.category === route.name && p.slug !== 'index')
      .sort((a, b) => a.order as number - b.order as number)
  })

  function getMetadata(path: string): MetaData {
    return metadataPages.find((p) => p.path === path) as MetaData
  }
  return { isCourse, getMetadata, page, pages }
}
