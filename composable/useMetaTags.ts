import { onMounted } from 'vue'
import { usePage } from './usePage'
import { useRuntimeConfig, useHead } from '#app'

export function useMetaTags() {
  const { page } = usePage()
  const config = useRuntimeConfig()
  function generateMetaTags(): void {
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
    ]
    if (config.public.isBikeAndFly || config.public.isFlyTirol) {
      meta.push({
        hid: 'og:image',
        property: 'og:image',
        content: config.public.isBikeAndFly
          ? 'https://bikeandfly.at/media/BikeAndFlyLogo_384.jpg'
          : 'https://fly-tirol.com/media/FlyTirolLogo_384.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: config.public.isBikeAndFly
          ? `https://bikeandfly.at${page.value.path}`
          : `https://fly-tirol.com${page.value.path}`,
      })
    }
    useHead({
      meta,
      title,
    })
  }
  onMounted(() => {
    generateMetaTags()
  })
}
