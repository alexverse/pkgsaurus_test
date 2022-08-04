# `format_r`

Format R


## Description

Uses the `{styler}` package to automatically format R sources.


## Usage

```r
format_r(paths)
```


## Arguments

Argument      |Description
------------- |----------------
`paths`     |     Character vector of files and directories to format.


## Details

The code is formatted according to the `styler::tidyverse_style` guide with one adjustment:
 spacing around math operators is not modified to avoid conflicts with `box::use()` statements.


## Value

None. This function is called for side effects.


## Examples

```r
if (interactive()) {
# Format a single file.
format_r("app/main.R")

# Format all files in a directory.
format_r("app/view")
}
```


