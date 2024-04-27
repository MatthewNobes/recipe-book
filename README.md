# Recipe App

[![CI Build](https://github.com/MatthewNobes/recipe-book/actions/workflows/ci.js.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/ci.js.yml) [![CI CodeQL](https://github.com/MatthewNobes/recipe-book/actions/workflows/codeql.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/codeql.yml) [![CI Docker Image](https://github.com/MatthewNobes/recipe-book/actions/workflows/docker-image.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/docker-image.yml) [![CI ESLint](https://github.com/MatthewNobes/recipe-book/actions/workflows/eslint.yml/badge.svg)](https://github.com/MatthewNobes/recipe-book/actions/workflows/eslint.yml)

This is the frontend web app for the recipe book system. It consists of a JS React web app that uses a [supabase](https://supabase.com/) database underneath to manage the backend, including storage and authentication. 

It was originally built from a create-react-app template that has grown and changed significantly. 

# Development

To get started with this component. Open a new terminal for `Recipe App`. The type the following command to install the necessary dependencies

```bash
pnpm install
```

The next step is to configure the environment variables. Make a new file in the root of the component called `.env`. This is where the connection parameters for supabase will be kept. See the example `.env` file below:

```js
REACT_APP_SUPABASE_URL = "<url goes here>"
REACT_APP_SUPABASE_KEY="<key goes here>"
```

Once this is configured, start up the app using the command:

```bash
pnpm start
```
## Local Supabase 

Supabase has been setup for this project to work locally using the supabase command line interface. As prerequisites to this, you will need [Docker](https://www.docker.com/) and the [Supabase CLI](https://github.com/supabase/cli) installed. 

With Supabase CLI installed, you need to link the local instance to the repo, you can do this by running the following command with the project reference in place. 

```
supabase link --project-ref project-id
```

After the project is linked, you need to pull down the changes from the remote database using the following command:

```
supabase db pull
```

The local version of supabase can then be launched using the command `supabase start`. This will use Docker to create localised versions of everything supabase has to offer, include the database, authentication and edge functions. 

When making changes, its advised to make database changes in the Studio UI, which is typically hosted locally on: http://localhost:54323

Once changes have been made to the schema, run the command below to create a new .sql file showing the new changes to the schema. Insert a name when running the command to identify the changes that have taken place. 

```
supabase db diff -f insert-name
```

This change migration file can be pushed to the remote hosted database using the following command: 

```
supabase db push
```


## Testing

Jest is being used for unit testing on this component. You can run these tests using the following command:

```bash
pnpm test
```

## Linting 

ESLint has been setup with this project, you can view the ESLint configuration in the `.eslintrc.js` file. If you wish to check the linting for this component use the following command: 

```bash
pnpm run lint
```

# Deployment

This component is setup with a Dockerfile. An image of this app can be created
using the docker build command as seen below. (insert-name marks where you can
set the Docker image name, the -t flag allows this name tag to be allocated)

```bash
docker build . -t insert-name
```

To load this Docker image into a container, the docker run command is used as follows with the name selected for the image in the previous step in place for `insert-name`.

```bash
docker run -p 3000:3000 -d insert-name
```

NOTE: The Dockerfile has been configured to run on port 3000. The app can be run on another port by replacing the first `3000` in the command above with your own choice of port.
