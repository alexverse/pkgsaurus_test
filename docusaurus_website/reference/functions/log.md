# `log`

Logging functions


## Description

Convenient way to log messages at a desired severity level.


## Format

An object of class `list` of length 7.


## Usage

```r
log
```


## Details

The `log` object is a list of logging functions, in order of decreasing severity:
  

*   `fatal`  

*   `error`  

*   `warn`  

*   `success`  

*   `info`  

*   `debug`  

*   `trace`  
 
 Rhino configures logging based on settings read from the `config.yml` file
 in the root of your project:
  

*   `rhino_log_level` : The minimum severity of messages to be logged. 

*   `rhino_log_file` : The file to save logs to. If `NA` , standard error stream will be used. 
 
 The default `config.yml` file uses !expr Sys.getenv() 
 so that log level and file can also be configured
 by setting the `RHINO_LOG_LEVEL` and `RHINO_LOG_FILE` environment variables.
 
 The functions re-exported by the `log` object are aliases for `{logger}` functions.
 You can also import the package and use it directly to utilize its full capabilities.


## Examples

```r
box::use(rhino[log])

# Messages can be formatted using glue syntax.
name <- "Rhino"
log$warn("Hello {name}!")
log$info("{1:3} + {1:3} = {2 * (1:3)}")
```


