# recipe-book-api 

The api middleware for the recipe book app I have been developing. It serves data from my local recipe book SQL Server database to the frontend app.

## Documentation (Swagger)

This API has been designed to conform with the [OpenAPI 3.0 standard](https://swagger.io/specification/). The swagger documentation page of the available routes for this API can be found at the following route when the api is started:

```
http://localhost:4444/swagger/
or
http://host-ip:port-number/swagger/
```

## Development

To get started with this API, the first step is to install all the required dependencies. This can be done by using either of the two commands below:

```bash
npm install
or
yarn install
```

The next stage is to set up your database. Eventually a DB setup SQL script will be provided. In a `.env` file placed at the root of the application, set the database connection string in a variable called DATABASE_URL. This is done in the standard JDBC standard. Below shows the structure and an example. It requires the following parameters:

- Server hostname or IP
- Server port
- Database name
- Username
- Password

```
DATABASE_URL="sqlserver://<server-ip-address>:<port>;database=<database-name>;user=<username>;password=<password>;encrypt=true;TrustServerCertificate=true;"

Example: DATABASE_URL="sqlserver://192.168.1.1:1433;database=Recipe Book;user=sa;password=password;encrypt=true;TrustServerCertificate=true;"
```

To ensure the database can be accessed using prisma run the first command below to update the prisma schema, the second command allows this updated schema to be provided by prisma client. If you make any changes to the database, you will need to run both of these commands again.

```bash
npm run prisma-pull
npm run prisma-generate
```

### Testing

This API has been designed using Test Driven Development (TDD). Therefore, Jest test coverage is high allowing for alteration tracking to be done using the testing suite. An NPM command has been setup for this:

```bash
npm test
```

#### DB Mocking

The database has been mocked for unit testing using the singleton method recommended by Primsa. For more information on how this was setup visit the Prisma unit testing guide [Prisma unit testing guide](https://www.prisma.io/docs/guides/testing/unit-testing).
This will allow for unit tests to be carried out without the database as a dependency, allowing for CI & CD pipelines to be added.

## Deployment

This API has been setup with Docker support from the outset. An image of this app can be created using the docker build command as seen below. (insert-name marks where you can set the Docker image name, the -t flag allows this name tag to be allocated)

```bash
docker build . -t insert-name
```

To load this Docker image into a container, the docker run command is used as follows with the name selected for the image in the previous step in place for insert-name.

```bash
docker run -p 4444:4444 -d insert-name
```

NOTE: The Dockerfile has been configured to run on port 4444. The app can be run on another port by replacing the first 4444 in the command above with your own choice of port.