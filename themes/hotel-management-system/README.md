<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Hotel-Management theme
</h1>

A Gatsby theme for hotel management system.

## Test the site

```
yarn
yarn develop
```

## Installation

1. Install the Hotel-Management theme

```shell
yarn add hotel-management-theme
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "hotel-management-theme",
      options: {
        // basePath defaults to `/`
      },
    },
  ],
}
```

4. Run your site using `gatsby develop` and navigate to your hotel-management-system site.

## Usage

### Theme options

| Key        | Default value | Description           |
| ---------- | ------------- | --------------------- |
| `basePath` | `/`           | Root url for the site |

#### Example configuration

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `hotel-management-theme`,
      options: {
        // basePath defaults to `/`
        basePath: `/site/`,
      },
    },
  ],
}
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`
