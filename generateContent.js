import {existsSync, readFileSync, writeFile} from "fs"
import glob from "glob"
import {marked} from "marked"

function generate(nuxtPage) {
  const metadataJson = `./static_${nuxtPage}/metadata.json`

  let dataMetaDataJson = {}
  if (existsSync(metadataJson)) {
    dataMetaDataJson = JSON.parse(readFileSync(metadataJson))
  }

  const content = glob.sync(`./content_${nuxtPage}/**/*.md`).sort()

  dataMetaDataJson = []
  content.forEach((filePath) => {
    const folder = filePath.split('/')[filePath.split('/').length - 2]
    const slug = filePath
      .split('/')
      [filePath.split('/').length - 1].replace('.md', '')
    const path =
      folder === `content_${nuxtPage}` && slug === 'index'
        ? '/'
        : folder === `content_${nuxtPage}`
        ? `/${slug}/`
        : slug === 'index'
        ? `/${folder}/`
        : `/${folder}/${slug}/`
    const category = folder === `content_${nuxtPage}` ? '' : folder

    // parse markdown files
    const data = readFileSync(filePath, 'utf8')
    const isContentImageGallery = data.includes('<ContentImageGallery ')
    const isContentPartnerCard = data.includes('<ContentPartnerCard ')
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
    content.push(marked(data.split('---')[2]).split(/\r\n|\n/))
    content.push(['</div>', '</template>'])

    if (isContentImageGallery || isContentPartnerCard) {
      content.push([
        '',
        '<script>',
        "import { defineComponent } from '@vue/composition-api'",
      ])
    }
    if (isContentImageGallery && !isContentPartnerCard) {
      content.push([
        "import ContentImageGallery from '~/components/ContentImageGallery.vue'",
        'export default defineComponent({',
        '  components: { ContentImageGallery },',
        '})',
      ])
    } else if (!isContentImageGallery && isContentPartnerCard) {
      content.push([
        "import ContentPartnerCard from '~/components/ContentPartnerCard.vue'",
        'export default defineComponent({',
        '  components: { ContentPartnerCard },',
        '})',
      ])
    } else if (isContentImageGallery && isContentPartnerCard) {
      content.push([
        "import ContentImageGallery from '~/components/ContentImageGallery.vue'",
        "import ContentPartnerCard from '~/components/ContentPartnerCard.vue'",
        'export default defineComponent({',
        '  components: { ContentImageGallery, ContentPartnerCard },',
        '})',
      ])
    }
    if (isContentImageGallery || isContentPartnerCard) {
      content.push(['</script>', ''])
    }
    const text = content.flat().join('\r\n')
    writeFile(filePath.replace('.md', '.vue'), text, (err) => {
      if (err) throw err
    })
  })

  const json = JSON.stringify(dataMetaDataJson, null, 2)
  writeFile(metadataJson, json, (err) => {
    if (err) throw err
  })
}

for (const pagePage of ['flytirol', 'whitecloud']) {
  generate(pagePage)
}
