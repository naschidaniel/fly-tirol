import { computed, useRoute } from '@nuxtjs/composition-api'
import metadata from '~/static/metadata.json'

export function useMetaTags() {
  const route = useRoute()
  const page = computed(() => {
    const routeFullPath = `${route.value.fullPath.split('?')[0]}/`.replace(
      '//',
      '/'
    )
    return metadata.find((p) => p.path === routeFullPath)
  })

  const pages = computed(() => {
    const routeName = route.value.name
    return metadata
      .filter((p) => p.category === routeName)
      .sort((a, b) => a.order - b.order)
  })

  function generateMetaTags(title, description, url) {
    return [
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fly-tirol.com/media/FlyTirolLogo.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://fly-tirol.com${url}`,
      },
    ]
  }

  return { generateMetaTags, page, pages }
}
