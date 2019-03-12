# mikko-monthly-money

* [Overview](#overview)
* [Prerequisites](#prerequisites)
  * [Docker](#docker)
* [Initial setup](#initial-setup)
  * [Docker](#docker-image)
  * [NPM dependencies](#npm-dependencies)
* [Testing](#testing)
  * [Vulnerability checking](#vulnerability-checking)
  * [Commit linting](#commit-linting)
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

## Testing

The application is set up with multiple forms of automated testing. These are
[Vulnerability checking](#vulnerability-checking) and
[Commit linting](#commit-linting).

All tests can be run together with the command:

```sh
$ docker-compose run --rm app npm test
```

### Vulnerability checking

All installed dependencies are scanned for vulnerabilities through the built-in
[npm audit](https://docs.npmjs.com/cli/audit) command. Vulnerabilities can be checked in isolation
with the command:

```sh
$ docker-compose run --rm app npm run test:vulnerabilities
```

### Commit linting

`git` commit messages are linted through
[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli), with the
[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
configuration. `git` hooks are set up upon dependency installation through
[husky](https://www.npmjs.com/package/husky). Commit messages are automatically linted on each
commit.

## Dependencies

Below is an index of dependencies that are not already mentioned above, and why they are added:

* [chalk](https://www.npmjs.com/package/chalk)

  Adding a bit of flair to the command-line output. Because some escape sequences behave differently
  on different terminals, and because not all support color output, I opted for using this well-
  maintained library instead.
