# common-dts <img src="dts.svg" alt="DTS Logo" width="35"/>

<p align="center">
  <img src="screenshot.png"/>
</p>
<p align="center">
  <b>No More Type Extension Error</b>
</p>

&nbsp;

Collection of reusable `.d.ts` files commonly used on your projects. So you don't need to Google it again.

## Installation

###### NPM

```bash
npm i -D common-dts
```

###### PNPM

```bash
pnpm add -D common-dts
```

###### PNPM

```bash
yarn add -D common-dts
```

## Usage

Pick any item from the [Supported Extensions](#supported-extensions) table and put its **File Name** on the `include` field inside your `tsconfig.json` file.

###### Example

```json
{
  "include": [
    "common-dts/png.d.ts",
    "common-dts/module.css.d.ts",
    "common-dts/module.sass.d.ts"
  ]
}
```

## Supported Extensions
 
| Framework | Name                | Extension                     | File Name                     |
| --------- | ------------------- | ----------------------------- | ----------------------------- |
| Any       | CSS Module          | `.module.css`                 | `common-dts/module.css.d.ts`  |
| Any       | Sass or SCSS Module | `.module.scss` `.module.sass` | `common-dts/module.scss.d.ts` |
| Any       | AVIF                | `.avif`                       | `common-dts/avif.d.ts`        |
| Any       | Bitmap              | `.bmp`                        | `common-dts/bmp.d.ts`         |
| Any       | PNG                 | `.png`                        | `common-dts/png.d.ts`         |
| Any       | JPG                 | `.jpg` `.jpeg`                | `common-dts/jpg.d.ts`         |
| Any       | GIF                 | `.gif`                        | `common-dts/gif.d.ts`         |
| Any       | WEBP                | `.webp`                       | `common-dts/webp.d.ts`        |
| React     | SVG                 | `.svg`                        | `common-dts/react/svg.d.ts`   |
| Vue       | SVG                 | `.svg`                        | `common-dts/vue/svg.d.ts`     |
| Solid     | SVG                 | `.svg`                        | `common-dts/solid/svg.d.ts`   |
| Svelte    | SVG                 | `.svg`                        | `common-dts/svelte/svg.d.ts`  |
