---
sidebar_position: 3
title: JS Code
---

<p class="alert alert-warning">
This article is a stub. We are working to edit and expand it.
</p>

The `app/js/index.js` is the entrypoint for your JavaScript code.

To use functions defined in this file in R you must export them:

    export function sayHello() { console.log('Hello!'); }

and use an `App.` prefix when referring to them in your R code.

    tags$button(onclick = "App.sayHello()")

