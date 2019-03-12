# mikko-monthly-money

* [Overview](#overview)
* [Prerequisites](#prerequisites)
  * [Docker](#docker)
* [Initial setup](#initial-setup)
  * [Docker](#docker-image)
  * [NPM dependencies](#npm-dependencies)

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
