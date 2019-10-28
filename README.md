## WebdriverIO-Mocha-Chai

This is a demo project for angular application to acheive e2e automation tests using webdriverIO, we will be using Mocha which is a feature-rich javascript test framework running on Node.js and in the browser, making asynchronus testing simple. Besides, in this test automation we will be using Chai which is a BDD assertion library. 

## Pre-requisites: 
1. Node.js 
2. Javascript
3. iterm/command-line

## installation and setup

1. Firstly, if there is node setup by using the command `node -v`. Recommended to use latest version of node
2. run `npm i` to get the node_modules
3. And, run `npx wdio` to execute the automated tests

## Page Object Pattern:

Also known as POM (Page object Model), to make tests look more understandable and reduces the dupliction of code. It also helps us to reduce the refactoring of elements locators. 

## eslint:

It helps developers to make the code more error free using it's liniting utilities. `./node_modules/.bin/eslint yourFile.js`, this will help to find the linting errors in your file. In order to fix the errors you can simple use `./node_modules/.bin/eslint yourFile.js --fix`.

## TODO:
1. setup Allure reporter for tracking excuted tests https://github.com/allure-framework/allure-docs/blob/master/docs/reporting/commandline.adoc

## Links for further reading:

https://webdriver.io/docs/gettingstarted.html <br/>
https://github.com/klamping/wdio-starter-kit <br/>
https://eslint.org/
