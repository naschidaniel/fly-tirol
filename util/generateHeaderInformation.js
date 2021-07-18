export function generateMetatags(title, description) {
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
      content: 'https://feel-free.tirol/media/FlyTirolLogo.jpg',
    },
  ]
}
