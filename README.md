# WebiU

<p>
  <img width="400" height="auto" src="https://github.com/Grumpyyash/Webiu/blob/master/static/images/logo.png">
</p>

Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running by developing reusable Gatsby Components which are easily plugable to create Gatsby websites with ease.

Website built with Webiu: https://www.scorelab.org/

## Installation

The project is based on ReactJs, JavaScript and GatsbyJs. You need to make sure that you have compatible versions of node/yarn, npm installed. SASS as the stylesheet is used in this project.

### Local Development Setup

You will need to have Gatsby CLI installed into your system
Go to the offical Gatsby documentation and proceed further to set up the Gatsby CLI https://www.gatsbyjs.com/docs/tutorial/

#### Project Dependencies

This project relies on the dependencies as well. 

Name | Version |
---  | --- | 
node | `14.17.4` |
npm  | `6.14.14` |
Gatsby CLI | `4.0.0` | 

You might require nvm (Node Version Manager) if you are dealing with multiple versions of Nodejs.

#### Installing Dependencies in **Ubuntu/Debian**

```
# Install nvm
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

source ~/.bashrc

# Install specific node version. This will also install npm version 6.14.14
nvm install 14.17.4 

# To use node in the current shell session
nvm use 14.17.4

#Install Gatsby CLI
npm install -g gatsby-cli@4.0.0
```

#### Installing Dependencies in **Windows**

* Remove any existing versions of node which you might have installed. 

* Head over to [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) and download the latest **nvm-setup.exe** file.

* Install **nvm-setup.exe** file and confirm the installation by running `nvm -v` in Command Prompt.

* Now open Powershell or Command Prompt with administrator permissions, and run the following commands: 

```
# Install specific node version. This will also install npm version 6.14.14
nvm install 14.17.4 

# To use the node version which you have installed
nvm use 14.17.4

#Install Gatsby CLI
npm install -g gatsby-cli@4.0.0
```

#### Installing Dependencies in **MacOS**

* Remove any existing versions of node which you might have installed. 

* You will need Homebrew on your MacOS. After that follow the steps given below: 

```
# Install nvm
brew update
brew install nvm
mkdir ~/.nvm

echo "export NVM_DIR=~/.nvm\nsource \$(brew --prefix nvm)/nvm.sh" >> .zshrc
source ~/.zshrc

# Install specific node version. This will also install npm version 6.14.14
nvm install 14.17.4 

# To use the node version which you have installed
nvm use 14.17.4

#Install Gatsby CLI
npm install -g gatsby-cli@4.0.0
```

After installing dependencies, check their versions by using these commands

```
# Node version: 14.17.4
node -v

# npm version: 6.14.14
npm -v

# Gatsby CLI version: 4.0.0
gatsby --version
```

## Project Setup

Fork the repository as your own copy
`https://github.com/ <Your Username> /Webiu.git`

Clone the repository in your local system
`git clone https://github.com/ <Your Username> /Webiu.git`

#### cd into the project

`cd Webiu`

#### Install All Dependencies

`npm install`

#### Errors if any?

Got Stuck? Don't forget to give a look to the troubleshooting guides https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/

If everythings seems normal, you are good to go :)

#### Develop the project

run `npm develop` or `gatsby develop`

Your site must be visible at
`http://localhost:8000`

## About The NPM Package

The webiu components now have a seperate dedicated npm-package which increases its reach to the developers. It has all the components exported and can be easily plugged into your next project. It is highly recommended to install and use the package:

https://www.npmjs.com/package/webiu-npm

## Usage of the NPM package

The npm package of webiu can be used in your next proejct. A sample project demonstrating he use-cases of the package is developed and is visible at:

https://grumpyyash.github.io/webiu-npm-test/

## StoryBook Visualization of the Components

All the webiu components are well-documented using StoryBook, a powerful visualization tool for reviewing UI. The storybook for webiu is deployed live on:

https://grumpyyash.github.io/Webiu

And, it is also deployed on chromatic - https://610d0e8b03a01e003b2f5070-rllntdhgdq.chromatic.com/

## Contributing to the Project

We value our contributers a lot and would appreciate contributions to our project. Please make sure to follow our contributing guidelines.
Please clearly explain any bugs, issues or feature requests (use screenshots wherever applicable) before opening any issue or pull request.

### May the source be with you!
