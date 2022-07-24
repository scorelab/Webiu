<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby E-Commerce theme
</h1>

A Gatsby theme for Customer Service web aplication.

## Test the site

```
yarn
yarn develop
```

## Installation

1. Install the Customer Service theme

```shell
yarn add customer-service-theme
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "customer-service-theme",
      options: {
        // basePath defaults to `/`
      },
    },
  ],
}
```

3. Add Details to your Customer Service site by creating `yml` file inside `/assets/data`.

   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your yml file in the directory specified by that path.

4. Run your site using `gatsby develop` and navigate to your Customer Service site.

## Usage

### Theme options

| Key           | Default value | Description                           |
| ------------- | ------------- | ------------------------------------- |
| `basePath`    | `/`           | Root url for the customer servicesite |
| `contentPath` | `assets/data` | Location of details about the site    |

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

The following are the defined customer service details fields based on the node interface in the schema

| Field         | Type   |
| ------------- | ------ |
| name          | String |
| userName      | String |
| location      | String |
| description   | String |
| contactNumber | String |
| email         | String |
| category      | String |
| reviews       | Array  |

### Example Item Figure

```yml
- name: John Doe
  userName: JDoe123
  location: Colombo
  description: I am a fully qualified person with experience in electrical working
  contactNumber: +94765432199
  email: johndoe@gmail.com
  category: electrical
  reviews:
    - date: 23/07/2022
      issue: There is a electrical work need to be done
      customerReview: Great Service. 100%
    - date: 22/07/2022
      issue: There is a wiring need to be done
      customerReview: Great Service. 100%
```
