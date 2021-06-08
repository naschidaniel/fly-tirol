# feelfree ![[Build Status]](https://github.com/naschidaniel/feelfree/actions/workflows/deploy-to-gh-pages.yml/badge.svg)

Visit us at [https://feelfree.tirol](https://feelfree.tirol).
We are a flight school in Westendorf and offer tandem flights, paragliding training and equipment sales in Westendorf / Tirol.
Come and share our passion with us!

# Development Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000 for linux / mac
$ npm run dev

# serve with hot reload at localhost:3000 for windows
$ npm run dev:windows
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

The images are optimised on the basis of the screen widths from [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design).

``` bash
# optimize images for Production
$ npm run optimize-images
```

### Collect Media Information

The images in the `./static/media` folder are listet in the `./static/media.json` file. The image information `title` and `alt` can be added in this json file for all Views. The most recently created file can be found here [https://github.com/naschidaniel/feelfree/blob/gh-pages/media.json](media.json).

``` bash
# Update media.json
$ npm run generateMediaInformation
```

# License
The source code is licensed under the MIT licence. Please read the [LICENSE](LICENSE.md) File for more information.
Text, informational content, graphics and images are under the licence of [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/) unless stated otherwise.
