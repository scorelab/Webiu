# WebiU

<p>
  <img width="400" height="auto" src="https://github.com/Grumpyyash/Webiu/blob/master/static/images/logo.png">
</p>

Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running by developing reusable Gatsby Components which are easily pluggable to create Gatsby websites with ease.

Website built with Webiu: https://www.scorelab.org/

## Installation

The project is based on ReactJs, JavaScript and GatsbyJs. You need to make sure that you have compatible versions of node/yarn, npm installed. SASS as the stylesheet is used in this project.

## Initial Setup

Fork the repository as your own copy
`https://github.com/ <Your Username> /Webiu.git`

Clone the repository in your local system
`git clone https://github.com/ <Your Username> /Webiu.git`

## Local Development Setup

You will need to have Gatsby CLI installed into your system
Go to the official Gatsby documentation and proceed further to set up the Gatsby CLI https://www.gatsbyjs.com/docs/tutorial/

#### Cd into the project

`cd Webiu`

#### Install All Dependencies

`npm install`

#### Errors if any?
If you face a `variables.sass` error while running `gatsby develop`, check `src/styles/variables.sass`. If the file is empty or not there, create a file with the same name and add the following attributes in the variables.sass:
`$text-color: #242526;
$primary: #54AD28;
$light-secondary: #E6ECEE;
$secondary: #24598B;
$dark-grey: #666666;
$grey: #808080;
$light-grey: #D3D3D3;
$very-light-grey: #C9C9C9;
$red: #F24423;
$very-dark-grey: #63676A;
$xs-and-less: (min-width: 576px);
$tiny-and-less: (min-width: 768px);
$md-and-less: (min-width: 992px);
$sm: (min-width: 576px);
$sm-and-less: (max-width: 576px)`

You can change these values anytime for different combinations of the site.

Got Stuck somewhere else? Don't forget to check the troubleshooting guides https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/

If everything seems normal, you are good to go :)

#### Develop the project

run `npm develop` or `gatsby develop`

It is recommended to use node v14 along with gatsby-cli 4.0.0, because gatsby uses different CLI versions for different versions of node. Use a version manager like nvm. run:
`run nvm install 14` 
`nvm use 14`

or, install the version globally(recommended):
`nvm alias default 14`
`nvm use 14`
Your site must be visible at
`http://localhost:8000`

## About The NPM Package

The webiu components now have a separate dedicated npm-package which increases its reach to the developers. It has all the components exported and can be easily plugged into your next project. It is highly recommended to install and use the package:

https://www.npmjs.com/package/webiu-npm

## Usage of the NPM package

The npm package of webiu can be used in your next project. A sample project demonstrating the use-cases of the package is developed and is visible at:

https://grumpyyash.github.io/webiu-npm-test/

## StoryBook Visualization of the Components

All the webiu components are well-documented using StoryBook, a powerful visualization tool for reviewing UI. The storybook for webiu is deployed live on:

https://grumpyyash.github.io/Webiu

And, it is also deployed on chromatic - https://610d0e8b03a01e003b2f5070-rllntdhgdq.chromatic.com/

## Contributing to the Project

We value our contributors a lot and would appreciate contributions to our project. Please make sure to follow our contributing guidelines.
Explain any bugs, issues or feature requests clearly(use screenshots wherever applicable) before opening any issues or pull requests.

### May the source be with you!
