import { existsSync, readFileSync, writeFile } from 'fs'
import glob from 'glob'
import sizeOf from 'image-size'

for (const nuxtPage of ['flytirol', 'whitecloud']) {
  const mediaJson =
    nuxtPage === 'whitecloud'
      ? './static_whitecloud/media.json'
      : './static_flytirol/media.json'

  const images =
    nuxtPage === 'whitecloud'
      ? glob.sync('./static_whitecloud/media/**/*.{jpg,png}')
      : glob.sync('./static_flytirol/media/**/*.{jpg,png}')

  const staticPath =
    nuxtPage === 'whitecloud' ? './static_whitecloud' : './static_flytirol'

  let dataMediaJson = {}
  if (existsSync(mediaJson)) {
    dataMediaJson = JSON.parse(readFileSync(mediaJson))
  }

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
      if (Object.keys(dataMediaJson).includes(img.url)) return
      dataMediaJson[img.url] = img
    })

  const dataSorted = Object.keys(dataMediaJson)
    .filter((o) => {
      return images.includes(`${staticPath}${o}`)
    })
    .sort()
    .reduce((obj, key) => {
      obj[key] = dataMediaJson[key]
      return obj
    }, {})

  const json = JSON.stringify(dataSorted, null, 2)
  writeFile(mediaJson, json, (err) => {
    if (err) throw err
  })
}
