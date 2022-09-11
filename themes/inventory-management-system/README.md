<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Inventory Management theme
</h1>

A Gatsby theme for customers in the inventory management system.

## Test the site

```
yarn
yarn develop
```

## Installation

1. Install the Inventory-Management theme

```shell
yarn add inventory-theme
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "inventory-theme",
      options: {
        // basePath defaults to `/`
      },
    },
  ],
}
```

4. Run your site using `gatsby develop` and navigate to your inventory-management-system site.

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
      resolve: `inventory-theme`,
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
