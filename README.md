# DotnetNg

## Start Project

```
ng new ${file name}
ng g c navbar
ng g c sidebar
npm i --save bootstrap@4.0.0-beta jquery popper.js
```

set path for style and script in angular.json

```
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/jquerydist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js",
              "./node_modules/popper.js/dist/umd/popper.min.js",
              "./node_modules/chart.js/dist/chart.min.js"
            ]
```

set Router for sidebar navigation

```
ng g c section-health
ng g c section-orders
ng g c section-sales

```

in app-routing.module import sections modules and add array of route paths
add RouterModule in app.module.ts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
