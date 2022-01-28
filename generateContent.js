const fs = require('fs')
const glob = require('glob')
const marked = require('marked')

const metadataJson = './static/metadata.json'

let dataMetaDataJson = {}
if (fs.existsSync(metadataJson)) {
  dataMetaDataJson = JSON.parse(fs.readFileSync(metadataJson))
}

const content = glob.sync('./content/**/*.md').sort()

dataMetaDataJson = []
content.forEach((filePath) => {
  const folder = filePath.split('/')[filePath.split('/').length - 2]
  const slug = filePath
    .split('/')
    [filePath.split('/').length - 1].replace('.md', '')
  const path = folder === 'content' ? `/${slug}/` : `/${folder}/${slug}/`
  const category = folder === 'content' ? '' : folder

  // parse markdown files
  const data = fs.readFileSync(filePath, 'utf8')
  const isContentImageGallery = data.includes('<ContentImageGallery ')
  let metadata = { path, category, slug }
  data
    .split('---')[1]
    .split(/\r\n|\n/)
    .forEach((e) => {
      const entry = e.trim().split(': ')
      if (e.length === 0) {
        return
      }
      metadata[entry[0]] = entry[1]
    })
  metadata = Object.keys(metadata)
    .sort()
    // eslint-disable-next-line no-sequences
    .reduce((r, k) => ((r[k] = metadata[k]), r), {})
  dataMetaDataJson.push(metadata)
  const content = ['<template>', '<div>']
  content.push(marked.marked(data.split('---')[2]).split(/\r\n|\n/))
  content.push(['</div>', '</template>'])

  if (isContentImageGallery) {
    content.push([
      '',
      '<script>',
      "import { defineComponent } from '@vue/composition-api'",
      "import ContentImageGallery from '~/components/ContentImageGallery.vue'",
      'export default defineComponent({',
      '  components: { ContentImageGallery },',
      '})',
      '</script>',
      '',
    ])
  }
  const text = content.flat().join('\r\n')
  fs.writeFile(filePath.replace('.md', '.vue'), text, (err) => {
    if (err) throw err
  })
})

const json = JSON.stringify(dataMetaDataJson, null, 2)
fs.writeFile(metadataJson, json, (err) => {
  if (err) throw err
})
