<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby E-Commerce theme
</h1>

A Gatsby theme for e-commerce web aplication.

## Test the site

```
yarn
yarn develop
```

## Installation

1. Install the E-commerce theme

```shell
yarn add ecommerce-theme
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "ecommerce-theme",
      options: {
        // basePath defaults to `/`
      },
    },
  ],
}
```

3. Add Items to your E-commerce site by creating `yml` file inside `/assets/data`.

   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your yml file in the directory specified by that path.

4. Run your site using `gatsby develop` and navigate to your E-commerce site.

## Usage

### Theme options

| Key           | Default value | Description                 |
| ------------- | ------------- | --------------------------- |
| `basePath`    | `/`           | Root url for the site posts |
| `contentPath` | `assets/data` | Location of items posts     |

#### Example configuration

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/site/`,
        contentPath: "content/data",
      },
    },
  ],
}
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

### Item Fields

The following are the defined blog post fields based on the node interface in the schema

| Field        | Type    |
| ------------ | ------- |
| name         | String  |
| price        | Float   |
| details      | String  |
| quantity     | Int     |
| maincategory | String  |
| subcategory  | String  |
| image        | String  |
| promo        | Boolean |

### Example Item Figure

```yml
- name: Kids top
  price: 5
  details: details about the item
  quantity: 10
  maincategory: Kids
  subcategory: Tops
  image: https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit
  promo: true
```
