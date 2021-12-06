export function useMetaTags() {
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

  return { generateMetaTags }
}
