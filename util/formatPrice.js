export function formatPrice(price) {
  const priceFormat = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })
  return price === undefined ? '–' : priceFormat.format(price)
}
