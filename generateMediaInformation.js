import { readFileSync, writeFile } from 'fs'
import { glob } from 'glob'
import { imageSize } from 'image-size'

for (const nuxtPage of ['flytirol', 'bikeandfly', 'hydrogen', 'gh2di']) {
  const constName
    = nuxtPage === 'gh2di'
      ? 'mediaGh2di'
      : nuxtPage === 'hydrogen'
        ? 'mediaHydrogen'
        : nuxtPage === 'flytirol'
          ? 'mediaFlyTirol'
          : 'mediaBikeAndFly'
  const mediaJson = JSON.parse(readFileSync(`data/${constName}.json`))
  const images = glob.sync(`public_${nuxtPage}/media/**/*.{jpg,png}`)
  const staticPath = `public_${nuxtPage}`

  images
    .sort()
    .map((filePath) => {
      const url = filePath.replace(staticPath, '')
      const file = filePath.split('/').reverse()[0]
      const path = filePath.replace(staticPath, '').replace(file, '')
      const buffer = readFileSync(filePath)
      const dimensions = imageSize(buffer)
      dimensions.ratio = Math.round((dimensions?.width / dimensions?.height) * 1000) / 1000
      return {
        url,
        path,
        file,
        stem: file.replace(`.${dimensions.type}`, ''),
        dimensions,
        alt: '',
        title: '',
      }
    }).forEach((img) => {
      if (Object.keys(mediaJson).includes(img.url)) {
        mediaJson[img.url].dimensions = img.dimensions
      }
      else {
        mediaJson[img.url] = img
      }
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
  writeFile(`data/${constName}.json`, json, (err) => {
    if (err) throw err
  })
  writeFile(
    `data/${constName}.ts`,
    `import type { MediaInformation } from '@/types/data'\n\n export const ${constName}: { [key: string]: MediaInformation} = ${json}`,
    (err) => {
      if (err) throw err
    },
  )
}
