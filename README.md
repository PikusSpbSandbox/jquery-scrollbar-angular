# JqueryScrollbarAngular

## What is this?

Angular 14+ directive wrapper for [jquery.scrollbar](https://www.npmjs.com/package/jquery.scrollbar) plugin.

## Installation

```
npm i jquery-scrollbar-angular
```
In your angular.json add following scripts:

```
"scripts": [
  ....
  "./node_modules/jquery/dist/jquery.min.js",
  "./node_modules/jquery.scrollbar/jquery.scrollbar.min.js"
]
```

Import JqueryScrollbarAngularModule in your app.module.ts:

```
import { JqueryScrollbarAngularModule } from "jquery-scrollbar-angular";
```
... and add imported module to imports:

```
imports: [
    BrowserModule,
    AppRoutingModule,
    ...,
    JqueryScrollbarAngularModule
  ],
```

Start using imported directive, e.g.:

```
<div class="content" jquery-scroll-bar>
...
</div>
```
## Demo
[Link](https://pikus.spb.ru/code/jquery-scrollbar-demo-angular)

Live demo samples can also be found on author's demo page:
https://gromo.github.io/jquery.scrollbar/demo/basic.html

## More documentation
For more information on jquery.scrollbar - see author's page on Github: [jquery.scrollbar](https://github.com/gromo/jquery.scrollbar)
