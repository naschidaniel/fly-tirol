# flying-in-tirol [![Build fly-tirol.com](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_flytirol.yml/badge.svg)](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_flytirol.yml) [![Build white-cloud.tirol](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_whitecloud.yml/badge.svg)](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_whitecloud.yml)

The source code of this project shares components for two websites.

## Fly-tirol.com
Visit us at [https://fly-tirol.com](https://fly-tirol.com).
We are a flight school in Westendorf and offer tandem flights, paragliding training and equipment sales in Westendorf / Tirol.
Come and share our passion with us!

## White-Cloud.tirol
Visit mit at [https://white-cloud.tirol](https://white-cloud.tirol).
I am a passionate pilot and would like to show you the world from above. Come with me and share my passion.

### Optimize Images

The `image-optimizer` tool is used to optimize images in the folders `public_flytirol/media` or `public_whitecloud/media`. Place the release v0.5.0 of [image-optimizer](https://github.com/naschidaniel/image-optimizer) for your system in the root directory. The files from `public_flytirol` and `public_whitecloud` are copied to `.public_flytirol` and `.public_whitecloud`. The images for the development and the build setup are used from the folders `.public_flytirol` or `.public_whitecloud`. 

The images are optimized on the basis of common images sizes.

``` bash
# optimize images for development and build setup
$ yarn optimize-images
```

### Backend

To display products from production set the Environment variable.

```
echo 'NUXT_BACKEND="flytirol"' > .env
```

## Development Setup

```bash

# set env Variable

export NUXT_PAGE=flytirol
# OR
export NUXT_PAGE=whiteclout

# install dependencies
$ yarn

# RUN buildDev for or steps bellow
$ yarn buildDev

# create the needed .nuxt folder
$ mkdir .nuxt && echo '{}' > .nuxt/tsconfig.json
# create the .public_flytirol and .public_whitecloud folder
$ yarn create-public

# optimize-images
$ yarn optimize-images

# if updated generateContent
$ yarn generateContent

# develop with hot reload at localhost:3000 for linux / mac
$ yarn dev

# if new media was added
$ yarn generateMediaInformation
```

## Build Setup

```bash
# generate SSR project, optimize-images and build the container
$ docker build -t flytirol --build-arg NUXT_PAGE='flytiriol' . 
# OR
$ docker build -t flytirol --build-arg NUXT_PAGE='whitecloud' . 


# generate static project, optimize-images and launch server
$ docker run -p 127.0.0.1:3000:3000/tcp flytirol
# OR 
$ docker run -p 127.0.0.1:3001:3001/tcp whitecloud
```

### Collect Media Information

The images in the `public_flytirol/media` or `public_whitecloud/media` folder are listed in the `data/mediaFlyTirol.js` or `data/mediaWhiteCloud.js` file. The image information `title` and `alt` can be added in this json file for all Views.

``` bash
# Update media.js
$ yarn generateMediaInformation
```

## Adding Content

- Adding content is easy and can be done via the Github website.
- The folder structure should be identical in the content and media folder.
### The content_flytirol and content_whitecloud folder

The markdown markup language is used for formatting the content. Read the [www.markdownguide.org/cheat-sheet](https://www.markdownguide.org/cheat-sheet/) for most relevant commands.

The first section contains variables that should be changed with care. The second part contains pure markdown markup in which components can be inserted.


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

## License
The source code is licensed under the MIT licence. Please read the [LICENSE](LICENSE) File for more information.
Text, informational content, graphics and images are under the licence of [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/) unless stated otherwise.
