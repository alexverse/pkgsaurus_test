---
sidebar_position: 4
title: Configuration File
---

<p class="alert alert-warning">
This article is a stub. We are working to edit and expand it.
</p>

# :wrench: Configure Rhino with `rhino.yml`

Rhino uses its own `rhino.yml` config file where you can set a few
options on how it works in your app. Currently available options are
described below.

## `rhino.yml` options

    sass: string               # required | one of: "node", "r"
    legacy_entrypoint: string  # optional | one of: "app_dir", "source", "box_top_level"

### `sass`

Configures whether [SASS](https://sass-lang.com/) should be build using
[R package](https://cran.r-project.org/package=sass) or [Node
package](https://www.npmjs.com/package/sass). The latter provides newest
implementation, at a cost of additional system dependencies for
development (`node` and `yarn`).

### `legacy_entrypoint`

This setting is useful when migrating an existing Shiny application to
Rhino. For more details see [`rhino::app()` details
section](https://appsilon.github.io/rhino/reference/app.html#details-1).

