# Recipe App

This is the frontend web app for the recipe book system. It consists of a JS React web app that uses a [supabase](https://supabase.com/) database underneath to manage the backend, including storage and authentication. 

It was originally built from a create-react-app template that has grown and changed significantly. 

# Development

To get started with this component. Open a new terminal for `Recipe App`. The type the following command to install the necessary dependencies

```bash
npm install
or
yarn install
```

The next step is to configure the environment variables. Make a new file in the root of the component called `.env`. This is where the connection parameters for supabase will be kept. See the example `.env` file below:

```js
REACT_APP_SUPABASE_URL = "<url goes here>"
REACT_APP_SUPABASE_KEY="<key goes here>"
```

Currently, no login system has been created, so you will also need to set the following environment variables about a test user in the users table in supabase. 

```js
REACT_APP_SUPABASE_EMAIL="<username goes here>"
REACT_APP_SUPABASE_WD="<password goes here>"
```

Once this is configured, start up the app using the command:

```bash
npm start
```

## Testing

Jest is being used for unit testing on this component. You can run these tests using the following command:

```bash
npm test
```

## Linting 

ESLint has been setup with this project, you can view the ESLint configuration in the `.eslintrc.js` file. If you wish to check the linting for this component use the following command: 

```bash
npm run lint
```

# Deployment

This component is setup with a Dockerfile. An image of this app can be created
using the docker build command as seen below. (insert-name marks where you can
set the Docker image name, the -t flag allows this name tag to be allocated)

```
docker build . -t insert-name
```

To load this Docker image into a container, the docker run command is used as follows with the name selected for the image in the previous step in place for `insert-name`.

```
docker run -p 3000:3000 -d insert-name
```

NOTE: The Dockerfile has been configured to run on port 3000. The app can be run on another port by replacing the first `3000` in the command above with your own choice of port.
