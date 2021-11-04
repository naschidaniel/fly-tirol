import Vue from 'vue'
import { formatDate, formatDateTime } from '../util/formatDate.js'

Vue.filter('formatDate', (date) => {
  return date === undefined ? '–' : formatDate(date)
})

Vue.filter('formatDateTime', (date) => {
  return date === undefined ? '–' : formatDateTime(date)
})
