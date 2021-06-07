const fs = require('fs')
const glob = require('glob')

const mediaJson = './static/media.json'

let data = {}
if (fs.existsSync('./static/media.json')) {
  data = JSON.parse(fs.readFileSync(mediaJson))
}

glob
  .sync('./static/media/**/*.{jpg,png}')
  .sort()
  .map((filePath) => {
    const url = filePath.replace('./static', '')
    const file = filePath.split('/').reverse()[0]
    const path = filePath.replace('./static', '').replace(file, '')
    return { url, path, file, alt: '', title: '' }
  })
  .forEach((img) => {
    if (Object.keys(data).includes(img.url)) return
    data[img.url] = img
  })

const dataSorted = Object.keys(data)
  .sort()
  .reduce((obj, key) => {
    obj[key] = data[key]
    return obj
  }, {})

const json = JSON.stringify(dataSorted, null, 2)
fs.writeFile(mediaJson, json, (err) => {
  if (err) throw err
})
