export function useFormat() {
  function formatDate(date: undefined | number | Date): string {
    const dateFormat = new Intl.DateTimeFormat('de-AT', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    return date === undefined ? '–' : dateFormat.format(date)
  }

  function formatDateTime(date: undefined | number | Date) {
    const dateTimeFormat = new Intl.DateTimeFormat('de-AT', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
    return date === undefined ? '–' : dateTimeFormat.format(date)
  }

  function formatPrice(price: undefined | number | string) {
    const priceFormat = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    })
    return price === undefined ? '–' : priceFormat.format(price as number)
  }

  return { formatDate, formatDateTime, formatPrice }
}
