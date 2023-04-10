import { readFileSync, writeFile } from 'fs'
import { glob } from 'glob'
import { marked } from 'marked'

function generate(nuxtPage) {
  const content = glob.sync(`content_${nuxtPage}/**/*.md`).sort()

  const metadataPages = []
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
    const metadata = { path, category, slug }
    data
      .split('---')[1]
      .split(/\r\n|\n/)
      .forEach((e) => {
        const entry = e.trim().split(': ')
        if (e.length === 0) {
          return
        }
        // Parse Values
        if (entry[0] === 'order') {
          metadata[entry[0]] = parseInt(entry[1])
        } else {
          metadata[entry[0]] = entry[1]
        }
      })
    const pages = Object.keys(metadata)
      .sort()
      // eslint-disable-next-line no-sequences
      .reduce((r, k) => ((r[k] = metadata[k]), r), {})
    metadataPages.push(pages)
    const content = ['<template>', '<div>']
    content.push(marked(data.split('---')[2]).split(/\r\n|\n/))
    content.push('</div>')
    content.push('</template>')

    if (isContentImageGallery || isContentPartnerCard) {
      content.push('')
      content.push('<script setup lang="ts">')
    }
    if (isContentImageGallery) {
      content.push(
        "import ContentImageGallery from '@/components/ContentImageGallery.vue'"
      )
    }
    if (isContentPartnerCard) {
      content.push(
        "import ContentPartnerCard from '@/components/ContentPartnerCard.vue'"
      )
    }
    if (isContentImageGallery || isContentPartnerCard) {
      content.push('</script>')
    }
    const text = content.flat().join('\r\n')
    writeFile(filePath.replace('.md', '.vue'), text, (err) => {
      if (err) throw err
    })
  })

  const json = JSON.stringify(metadataPages, null, 2)
  const constName =
    nuxtPage === 'flytirol' ? 'metadataFlyTirol' : 'metadataWhiteCloud'
  writeFile(
    `data/${constName}.ts`,
    `import { MetaData } from '@/types/data'\n\n export const ${constName}: MetaData[] = ${json}`,
    (err) => {
      if (err) throw err
    }
  )
}

export default function main() {
  for (const pagePage of ['flytirol', 'whitecloud']) {
    generate(pagePage)
  }
}

main()
