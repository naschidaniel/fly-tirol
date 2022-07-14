import { onMounted } from 'vue'
import { usePage } from './usePage.js'
import { useRuntimeConfig, useMeta } from '#app'

export function useMetaTags() {
  const { page } = usePage()
  const config = useRuntimeConfig()
  function generateMetaTags() {
    const title = page.value.title.replace(/(<([^>]+)>)/gi, '')
    const meta = [
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'description',
        name: 'description',
        content: page.value.description,
      },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: page.value.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: config.public.isWhiteCloud
          ? 'https://white-cloud.tirol/media/WhiteCloudLogo_sm.jpg'
          : 'https://fly-tirol.com/media/FlyTirolLogo_sm.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: config.public.isWhiteCloud
          ? `https://white-cloud.tirol${page.value.path}`
          : `https://fly-tirol.com${page.value.path}`,
      },
    ]
    useMeta({
      description: page.value.description,
      meta,
      title,
    })
  }
  onMounted(() => {
    generateMetaTags()
  })
}
