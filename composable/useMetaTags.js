import { computed, useRoute, useContext } from '@nuxtjs/composition-api'
import metadataFlyTirol from '~/static_flytirol/metadata.json'
import metadataWhiteCloud from '~/static_whitecloud/metadata.json'

const metadata = process.env.NUXT_PAGE === 'whitecloud' ? metadataWhiteCloud : metadataFlyTirol

export function useMetaTags() {
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
