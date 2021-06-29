# fly-tirol [![Deployment](https://github.com/naschidaniel/fly-tirol/actions/workflows/deploy-to-server.yml/badge.svg)](https://github.com/naschidaniel/fly-tirol/actions/workflows/deploy-to-server.yml)

Visit us at [https://fly-tirol.com](https://fly-tirol.com).
We are a flight school in Westendorf and offer tandem flights, paragliding training and equipment sales in Westendorf / Tirol.
Come and share our passion with us!

## Development Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000 for linux / mac
$ npm run dev

# serve with hot reload at localhost:3000 for windows
$ npm run dev:windows

# if new media was added
$ npm run generateMediaInformation
```

## Build Setup

```bash
# install dependencies
$ npm install

# generate static project, optimize-images and launch server
$ npm run generate
$ npm run optimize-images
$ npm run start
```

### Optimize Images for Production

The `image-optimizer` tool is needed to optimise the images in the folder `./media`. Place the latest release of [image-optimizer](https://github.com/naschidaniel/image-optimizer) for your system in the `./` directory. 
The original images are used for the local development environment. 

The images are optimized on the basis of the screen widths from [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design).

``` bash
# optimize images for Production
$ npm run optimize-images
```

### Collect Media Information

The images in the `./static/media` folder are listet in the `./static/media.json` file. The image information `title` and `alt` can be added in this json file for all Views. The most recently created file can be found here [https://github.com/naschidaniel/fly-tirol/blob/gh-pages/media.json](media.json).

``` bash
# Update media.json
$ npm run generateMediaInformation
```

## Adding Content

- Adding content is easy and can be done via the Github website.
- The folder structure should be identical in the content and media folder.
### The ./content folder

The markdown markup language is used for formatting the content. Read the [www.markdownguide.org/cheat-sheet](https://www.markdownguide.org/cheat-sheet/) for most relevant commands.

The first section contains variables that should be changed with care. The second part contains pure markdown markup in which components can be inserted. Have a look to the DemoPage for all available [https://fly-tirol.com/markdown/](https://fly-tirol.com/markdown/) components.


```markdown
---
title: 60 characters (required)
Description: 160 characters (required)
Variable1: lorim ipsum (optional)
---

# Heading 1

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam


## Heading 2

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
```


### The ./static/media folder

All images are stored in the [./static/media](./static/media). The metatags alt and title are stored in the file './static/media.json'. The updated 'media.json' can be downloaded from the latest build process.

## License
The source code is licensed under the MIT licence. Please read the [LICENSE](LICENSE.md) File for more information.
Text, informational content, graphics and images are under the licence of [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/) unless stated otherwise.
