# recipe-book

[![CI](https://github.com/MatthewNobes/recipe-book/actions/workflows/ci.js.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/ci.js.yml) [![ESLint](https://github.com/MatthewNobes/recipe-book/actions/workflows/eslint.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/eslint.yml) [![CodeQL](https://github.com/MatthewNobes/recipe-book/actions/workflows/codeql.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/codeql.yml) [![Docker Image CI](https://github.com/MatthewNobes/recipe-book/actions/workflows/docker-image.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/docker-image.yml)

A JS/TS recipe app with a SQL Server database. Its been designed for personal deployment, running out of two docker containers alongside a database instance. It allows users to create and view their own recipes. 

This project is available with an Apache 2.0 license, for more information, click [here](https://www.apache.org/licenses/LICENSE-2.0).

## Development

To get setup with this repository, clone it and load the `recipe-book.code-workspace` file in the root directory of the project.

The solution consists of three core components, the database, API and the web app.

### recipe-book-app

The App is the user interface for the recipe-book system. The App has been created with [React](https://reactjs.org/) and JavaScript. 

For setup and development information for this component see the `README.md` in the component directory.

### recipe-book-api

The API provides data from the database for the recipe app. It is built using [Typescript](https://www.typescriptlang.org/), [Express](https://expressjs.com/) and [Prisma](https://www.prisma.io/).

For setup and development information for this component see the `README.md` in the component directory.

The API routes can be found on the swagger page, see the Documentation section in the `README.md`.

### database

The database for this project is a SQL Server database. Currently it exists only in the dev server I have made but I will release a schema for this in the future.

## Deployment

This up can be deployed using Docker. Each component has its own docker file, they can be built and deployed independently. Instructions on building these can be found in the `README.md` files, located in the component directories.

There is also a Docker Compose file setup to build and deploy both components together in the root directory - `docker-compose.yml`. To use this file to build and deploy a production version, use the command below:

```bash
docker-compose up --build
```
