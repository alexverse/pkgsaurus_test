# `app`

Rhino application


## Description

The entrypoint for a Rhino application.
 Your `app.R` should contain nothing but a call to `rhino::app()` .


## Usage

```r
app()
```


## Details

This function is a wrapper around `shiny::shinyApp()` .
 It reads `rhino.yml` and performs some configuration steps (logger, static files, box modules).
 You can run a Rhino application in typical fashion using `shiny::runApp()` .
 
 Rhino will load the `app/main.R` file as a box module ( `box::use(app/main)` ).
 It should export two functions which take a single `id` argument -
 the `ui` and `server` of your top-level Shiny module.


## Value

An object representing the app (can be passed to `shiny::runApp()` ).


## Examples

```r
# Your `app.R` should contain nothing but this single call:
rhino::app()
```


