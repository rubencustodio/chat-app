# Ruben and Joe's Chat App

> Angular 2 is still in **Release Candidate** stage, please **don't** use this in production

> Follow Angular 2 Changelog [here](https://github.com/angular/angular/blob/master/CHANGELOG.md)

> Live Production Build [Demo](https://antonybudianto.github.io/angular2-starter/)

## Installation
Firstly, you need to have [Node.js](https://nodejs.org/en/)
- For v4, please use v4.3.x (LTS) or higher (**highly** recommended)
- For v5, please use v5.6.x or higher, here is [why](https://nodejs.org/en/blog/vulnerability/february-2016-security-releases/)
- Ready for v6

> You need v4.x or higher for [Protractor](https://angular.github.io/protractor/#/)

Get the starter from [releases page](https://github.com/antonybudianto/angular2-starter/releases)

Then, install these packages globally:
```bash
npm install -g gulp
```

After that, go to the starter directory and just run:
```bash
npm install
```

## Start
Let's start up the server, run:
`gulp` or `gulp serve-dev`

and done! The browser will popup and you can start trying Angular 2!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Testing
This starter comes with testing gulp workflow

### Unit testing
Just run
```bash
gulp test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled JavaScript coverage.

![Coverage result](http://s33.postimg.org/w7m9ckdkf/Screen_Shot_2016_06_04_at_8_15_53_AM.png)

### E2E testing
Firstly start the server:
```
gulp serve-dev
```
To begin testing, run:
```bash
gulp e2e
```
and it'll compile all E2E spec files in `/src/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

You can create production build by running:
```bash
gulp build
```
or you can create production build and then serve it using Browsersync by running:
```bash
gulp serve-build
```
## License
MIT
