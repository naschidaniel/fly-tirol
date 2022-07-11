import { writeFile } from 'fs'
import glob from 'glob'
import sizeOf from 'image-size'
import { mediaFlyTirol, mediaWhiteCloud } from './data/index.js'

for (const nuxtPage of ['flytirol', 'whitecloud']) {
  const mediaJson = nuxtPage === 'flytirol' ? mediaFlyTirol : mediaWhiteCloud
  const images = glob.sync(`./public_${nuxtPage}/media/**/*.{jpg,png}`)
  const staticPath = `./public_${nuxtPage}`

  images
    .sort()
    .map((filePath) => {
      const url = filePath.replace(staticPath, '')
      const file = filePath.split('/').reverse()[0]
      const path = filePath.replace(staticPath, '').replace(file, '')
      const dimensions = sizeOf(filePath)
      dimensions.ratio =
        Math.round((dimensions?.width / dimensions?.height) * 1000) / 1000
      return { url, path, file, dimensions, alt: '', title: '' }
    })
    .forEach((img) => {
      if (Object.keys(mediaJson).includes(img.url)) return
      mediaJson[img.url] = img
    })

  const dataSorted = Object.keys(mediaJson)
    .filter((o) => {
      return images.includes(`${staticPath}${o}`)
    })
    .sort()
    .reduce((obj, key) => {
      obj[key] = mediaJson[key]
      return obj
    }, {})

  const json = JSON.stringify(dataSorted, null, 2)
  const constName =
    nuxtPage === 'flytirol' ? 'mediaFlyTirol' : 'mediaWhiteCloud'
  writeFile(
    `./data/${constName}.js`,
    `export const ${constName} = ${json}`,
    (err) => {
      if (err) throw err
    }
  )
}
