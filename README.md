# recipe-book

A JS/TS recipe app with a SQL Server database.

This project is available with an Apache 2.0 license, for more information, click [here](https://www.apache.org/licenses/LICENSE-2.0).

## Development

To get setup with this repository, clone it and load the `recipe-book.code-workspace` file in the root directory of the project.

The solution consists of three core components, the database, API and the web app.

### recipe-book-app

For setup and development information for this component see the `README.md` in the component directory.

### recipe-book-api

For setup and development information for this component see the `README.md` in the component directory.

### database

The database for this project is a SQL Server database. Currently it exists only in the dev server I have made but I will release a schema for this in the future.

## Deployment

This up can be deployed using Docker. Each component has its own docker file, they can be built and deployed independently. Instructions on building these can be found in the `README.md` files, located in the component directories.

There is also a Docker Compose file setup to build and deploy both components together in the root directory - `docker-compose.yml`. To use this file to build and deploy a production version, use the command below:

```bash
docker-compose up --build
```
