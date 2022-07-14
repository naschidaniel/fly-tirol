import { onMounted } from 'vue'
import { usePage } from './usePage'
import {useRuntimeConfig} from '#imports'

export function useMetaTags() {
  const { page } = usePage()
  const config = useRuntimeConfig()
  // TODO NUXT3
  function generateMetaTags() {
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
      { hid: 'og:title', property: 'og:title', content: page.value.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: page.value.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: config.isWhiteCloud
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
        content: config.isWhiteCloud
          ? `https://white-cloud.tirol${page.value.path}`
          : `https://fly-tirol.com${page.value.path}`,
      },
    ]
    // TODO NUXT3
    // migrate to https://v3.nuxtjs.org/guide/features/head-management
    // useMeta({
    //   description: page.value.description,
    //   meta,
    //   title: page.value.title,
    // })
  }
  onMounted(() => {
    generateMetaTags()
  })
}
