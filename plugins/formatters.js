import Vue from 'vue'

Vue.filter('formatDate', (date) => {
  const dateFormat = new Intl.DateTimeFormat('de-AT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  console.log(dateFormat.format(date))

  return date === undefined ? '–' : dateFormat.format(date)
})

Vue.filter('formatDateTime', (date) => {
  const dateTimeFormat = new Intl.DateTimeFormat('de-AT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
  return date === undefined ? '–' : dateTimeFormat.format(date)
})
