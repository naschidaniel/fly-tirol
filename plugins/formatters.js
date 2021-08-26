import Vue from 'vue'
import { formatDate, formatDateTime } from '../util/formatDate.js'

Vue.filter('formatDate', (date) => {
  return date === undefined ? '–' : formatDate(date)
})

Vue.filter('formatDateTime', (date) => {
  return date === undefined ? '–' : formatDateTime(date)
})

Vue.filter('formatPrice', (price) => {
  const priceFormat = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })
  return price === undefined ? '–' : priceFormat.format(price)
})
