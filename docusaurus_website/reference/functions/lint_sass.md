# `lint_sass`

Lint Sass


## Description

Runs [Stylelint](https://stylelint.io/) on the Sass sources in the `app/styles` directory.
 Requires Node.js and the `yarn` command to be available on the system.


## Usage

```r
lint_sass(fix = FALSE)
```


## Arguments

Argument      |Description
------------- |----------------
`fix`     |     Automatically fix problems.


## Value

None. This function is called for side effects.


## Examples

```r
if (interactive()) {
# Lint the Sass sources in the `app/styles` directory.
lint_sass()
}
```


