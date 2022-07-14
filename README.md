# flying-in-tirol [![Build fly-tirol.com](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_flytirol.yml/badge.svg)](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_flytirol.yml) [![Build white-cloud.tirol](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_whitecloud.yml/badge.svg)](https://github.com/naschidaniel/fly-tirol/actions/workflows/build_whitecloud.yml)

The source code of this project shares components for two websites.

## Fly-tirol.com
Visit us at [https://fly-tirol.com](https://fly-tirol.com).
We are a flight school in Westendorf and offer tandem flights, paragliding training and equipment sales in Westendorf / Tirol.
Come and share our passion with us!

## White-Cloud.tirol
Visit mit at [https://white-cloud.tirol](https://white-cloud.tirol).
I am a passionate pilot and would like to show you the world from above. Come with me and share my passion.

## Development Setup

```bash

# set env Variable

export NUXT_PAGE=flytirol
# OR
export NUXT_PAGE=whiteclout

# install dependencies
$ yarn

# convert markdown files to vue files and lint output
$ yarn generateContent

# develop with hot reload at localhost:3000 for linux / mac
$ yarn dev

# if new media was added
$ yarn generateMediaInformation
```

### Shopify

To display data from Shopify the [Shopify JavaScript Buy SDK](https://www.npmjs.com/package/shopify-buy) is used. For local development the `SHOPIFY_DOMAIN` and `SHOPIFY_ACCESS_TOKEN` is needed.

```
echo 'SHOPIFY_DOMAIN="MyPersonalShopShopifyUrl"' > .env
echo 'SHOPIFY_ACCESS_TOKEN="ShopifyAccessToken"' >> .env
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

### Optimize Images for Production

The `image-optimizer` tool is used to optimize images in the folders `./public_flytirol/media` or `./public_whitecloud/media`. Place the latest release of [image-optimizer](https://github.com/naschidaniel/image-optimizer) for your system in the root directory. For local development, the original images are used. 

The images are optimized on the basis of the screen widths from [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design) and the two additional sizes `xs: 512 px` and `2xs: 384 px`.

``` bash
# optimize images for Production
$ yarn optimize-images:flytirol
# OR
$ yarn optimize-images:whitecloud
```

### Collect Media Information

The images in the `./public_flytirol/media` or `./public_whitecloud/media` folder are listet in the `./data/mediaFlyTirol.js` or `./data/mediaWhiteCloud.js` file. The image information `title` and `alt` can be added in this json file for all Views.

``` bash
# Update media.js
$ yarn generateMediaInformation
```

## Adding Content

- Adding content is easy and can be done via the Github website.
- The folder structure should be identical in the content and media folder.
### The ./content_flytirol and ./content_whitecloud folder

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
The source code is licensed under the MIT licence. Please read the [LICENSE](LICENSE.md) File for more information.
Text, informational content, graphics and images are under the licence of [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/) unless stated otherwise.
