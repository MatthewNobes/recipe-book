# Recipe App

Overview will go here

# Development

## Testing

# Deployment

The deployment plan for this project sees Docker as its main hosting point. An
image of this app can be created using the docker build command as seen below.
(insert-name marks where you can set the Docker image name, the -t flag allows
this name tag to be allocated)

```
docker build . -t insert-name
```

To load this Docker image into a container, the docker run command is used as
follows with the name selected for the image in the previous step in place for
insert-name.

```
docker run -p 3000:3000 -d insert-name
```

NOTE: The Dockerfile has been configured to run on port 3000. The app can be run
on another port by replacing the first 3000 in the command above with your own
choice of port.
