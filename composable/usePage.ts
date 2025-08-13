import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useData } from './useData'
import { metadataFlyTirol, metadataBikeAndFly, metadataHydrogen, metadataGh2di, metadataTandemPoint } from '@/data'
import { useRoute, showError } from '#imports'
import type { MetaData } from '~/types/data'

export function usePage() {
  const route = useRoute()
  const { isFlyTirol, isHydrogen, isGh2di, isTandemPoint } = useData()

  const metadataPages = isTandemPoint
    ? metadataTandemPoint
    : isFlyTirol
      ? metadataFlyTirol
      : isHydrogen
        ? metadataHydrogen
        : isGh2di
          ? metadataGh2di
          : metadataBikeAndFly

  const routeFullPath = `${route.fullPath.split('?')[0]}/`.replace('//', '/')
  if (metadataPages.find(p => p.path === routeFullPath) === undefined) {
    showError('Page not Found')
  }
  const page: ComputedRef<MetaData> = computed(() => {
    return (
      metadataPages.find(p => p.path === routeFullPath)
      || ({
        slug: '',
        title: '',
        lang: '',
        description: '',
      } as MetaData)
    )
  })

  const isCourse = computed(
    () =>
      !page.value.path?.includes('/tandemfliegen')
      && !page.value.path?.includes('/service')
      && isFlyTirol,
  )

  const pages: ComputedRef<MetaData[]> = computed(() => {
    return metadataPages
      .filter(
        p =>
          p.category === route.name && p.slug !== 'index' && p.lang === 'de',
      )
      .sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a?.order - b?.order
        }
        else {
          return 9999
        }
      })
  })

  function getMetadata(path: string): MetaData {
    return metadataPages.find(p => p.path === path) as MetaData
  }
  return { isCourse, getMetadata, page, pages }
}
