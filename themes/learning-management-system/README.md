<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Learning-Management theme
</h1>

A Gatsby theme for learning management system.

## Test the site

```
yarn
yarn develop
```

## Installation

1. Install the Learning-Management theme

```shell
yarn add learning-management-theme
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "learning-management-theme",
      options: {
        // basePath defaults to `/`
      },
    },
  ],
}
```

4. Run your site using `gatsby develop` and navigate to your learning-management-system site.

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
      resolve: `learning-management-theme`,
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
