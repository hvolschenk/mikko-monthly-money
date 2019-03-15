# mikko-monthly-money

* [Overview](#overview)
* [Prerequisites](#prerequisites)
  * [Docker](#docker)
* [Initial setup](#initial-setup)
  * [Docker image](#docker-image)
  * [NPM dependencies](#npm-dependencies)
* [Configuration](#configuration)
* [Running](#running)
  * [With default options](#with-default-options)
  * [With command-line arguments](#with-command-line-arguments)
* [Output](#output)
  * [Directory](#directory)
  * [Filetype](#filetype)
* [Testing](#testing)
  * [Linting](#linting)
  * [Vulnerability checking](#vulnerability-checking)
  * [Unit testing](#unit-testing)
  * [Commit linting](#commit-linting)
* [Logging](#logging)
* [Dependencies](#dependencies)

## Overview

A small [NodeJS](https://nodejs.org/en/) command-line application that determines monthly payout
dates of salaries and bonuses for the remaining months of the current year.

## Prerequisites

In order to run the application some local setup is required first.

### Docker

The application runs inside a `docker` container, started up by `docker-compose`; both of these are
required before using the application. On Windows and MacOS _Docker for desktop_ includes everything
that is required. For Linux users, please install `docker` and `docker-compose` through your
respective package-manager.

## Initial setup

After setting up all the [Prerequisites](#prerequisites), some initial application setup is
required. The `docker` image needs to be built, and initial [npm](https://www.npmjs.com/)
dependencies need to be installed.

### Docker image

The required `docker` image is built by using the command:

```sh
$ docker-compose build
```

### NPM dependencies

The [npm](https://www.npmjs.com/) dependencies for the application are installed locally and then
volume-mapped into the `docker` container as opposed to being installed inside the `docker`
container on build. This is done to give access to the `/node_modules` folder, and because
dependencies are updated rather frequently which then doesn't require a full rebuild. The
dependencies can be installed with the command:

```sh
$ docker-compose run --rm app npm i
```

## Configuration

Most application configuration is done through environment variables. These variables are set up in
the `/docker-compose.yml` file and are as follows:

| Name             | Default                 | Description                                                                          |
| ---------------- | ----------------------- | ------------------------------------------------------------------------------------ |
| APPLICATION_NAME | mikko-monthly-money     | The name of the application (used for display, and the log filename)                 |
| LOG_LEVEL        | info                    | The level to log at (`trace`, `debug`, `info`, `warn`, `error` or `fatal`)           |
| OUTPUT_FILENAME  | mikko-monthly-money.csv | The default name of the output file. Can be overwritten with a command-line argument |
| OUTPUT_HEADINGS  | true                    | Whether a heading should be added to each column (`true` or `false`)                 |

## Running

There are two main ways of running the application:

### With default options

All options have defaults set through environment variables, and as such the application can run
without having to specify any. All options from the [Configuration](#configuration) section above
will be used. The application can be run in this mode with the command:

```sh
$ docker-compose up
```

### With command-line arguments

Some environment variables can be overwritten from the command-line, they are all optional:

| Name           | Description                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| logLevel       | The level to log at (trace, debug, info, warn, error or fatal) (Overrides the `LOG_LEVEL` environment variable)             |
| outputFilename | The name of the output file (Overrides the `OUTPUT_FILENAME` environment variable)                                          |
| outputHeadings | Whether a heading should be added to each column (`true` or `false`) (Overrides the `OUTPUT_HEADINGS` environment variable) |

The command to run the application with command-line arguments is a little different because with
`docker-compose` arguments cannot be passed directly to the `docker-compose up` command:

```sh
$ docker-compose run --rm app npm start -- --logLevel=debug --outputFilename=new-filename.json --outputHeadings=false
```

## Output

### Directory

The output files are saved in the directory set in the `OUTPUT_PATH` environment variable, which is
set in `/Dockerfile`.

### Filetype

The extension set in the `OUTPUT_FILENAME` environment variable (or overridden by the
`outputFilename` command-line option) determines the type of output file that gets created.

The following filetypes are currently supported:

* `.csv` - Comma Separated Values
* `.json` - JavaScript Object Notation
* `.psv` - Pipe Separated Values
* `.tsv` - Tab Separated Values

## Testing

The application is set up with multiple forms of automated testing. These are [Linting](#linting),
[Vulnerability checking](#vulnerability-checking), [Unit testing](#unit-testing) and
[Commit linting](#commit-linting).

All tests (excluding [Commit linting](#commit-linting)) can be run together with the command:

```sh
$ docker-compose run --rm app npm test
```

### Linting

Linting is done through [eslint](https://eslint.org/) with the
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) configuration.
`require()` paths are linted through the use of the
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) and
[eslint-import-resolver-node](https://www.npmjs.com/package/eslint-import-resolver-node).
The [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) plugin is used to
check for common security pitfalls.

To run linting on it's own, use:

```sh
$ docker-compose run --rm app npm run test:lint
```

### Vulnerability checking

All installed dependencies are scanned for vulnerabilities through the built-in
[npm audit](https://docs.npmjs.com/cli/audit) command. Vulnerabilities can be checked in isolation
with the command:

```sh
$ docker-compose run --rm app npm run test:vulnerabilities
```

### Unit testing

Unit testing is done through [jest](https://jestjs.io/). Unit tests can be run in isolation through
the script:

```sh
$ docker-compose run --rm app npm run test:scripts
```

### Commit linting

`git` commit messages are linted through
[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli), with the
[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
configuration. `git` hooks are set up upon dependency installation through
[husky](https://www.npmjs.com/package/husky). Commit messages are automatically linted on each
commit.

## Logging

All output messages are logged through [Bunyan](https://www.npmjs.com/package/bunyan) to the folder
specified in the `LOG_PATH` environment variable, which is set in `/Dockerfile`. The `LOG_LEVEL`
[Configuration](#configuration) option is used to specify which severity log message(s) to log, and
can be overridden by the `logLevel` command-line argument. Log messages are written to both _stdout_
and _file_.

## Dependencies

Below is an index of dependencies used in the application that are not already mentioned above:

* [sanitize-filename](https://www.npmjs.com/package/sanitize-filename)

  To make sure the output file is portable between different OSs after saving, and to make sure that
  users do not reach out of the container when saving this packages was chosen over writing a
  custom sanitizer.

* [yargs](https://www.npmjs.com/package/yargs)

  Makes reading command-line arguments a whole lot easier without having to build a custom parser.
