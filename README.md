# UIX Base Project

This repository provides a simple UIX setup, including backend and frontend, a docker deployment configuration and configuration files.

# Project Structure

## Directories
The source code goes in two directories. 

The `backend` directory contains the backend endpoint logic. The backend endpoint runs locally with deno.

The `frontend` directory contains the code for the frontend clients (running in the web browser / as standalone web apps).
There is also `entrypoint.ts` for the frontend endpoints, which gets called when the endpoint is initialized. The default export of this module will be used as the UI root element.
You can optionally also add an `entrypoint.ts` to the `backend` directory.

The directory names are important to tell UIX which code runs on which endpoint. The default names can also be changed in the `app.dx` config file.

## app.dx

The `app.dx` configuration file (an `app.json` file can also be used) is required for a UIX app to run. It at least needs to contain the app name.
The `app.dx` has to be placed next to the app directories (`frontend` and `backend`) in the default configuration.

# Cross realm imports

Frontend modules can import exported values from the backend modules.
In the background, special interface module files are generated, making sure that the backend source code is never exposed to the frontend endpoints.

Access to these exports can be limited by setting DATEX permission filters.


# Development

Compilation of the TS files is not required. The project can be deployed as is.
There is a devcontainer set up with the latest and v1.21.3 deno versions installed. The latter is important for running the sample app.

To run the project, you need deno v.1.21.3:
hit `ctrl`+`F5` to launch the project with the launch config

With the `--live` option, frontend browser tabs are automatically reloaded when a file has changed, which is useful for development, but should not be used in production.

This command starts the backend endpoint and also exposes a web server on port 80 for frontend endpoints.

## Install UIX

Alternatively, you can install the `uix` shortcut command:
```bash
curl -s https://cdn.unyt.org/uix@dev/install.sh | sh
```

and start the app:
```bash
uix --live
```

(The docker container is currently only working on the main server)

# Deployment files
In the `deployment` folder there are files to build a docker image and a docker-compose to host it
The `.gitlab-ci.yml` contains code to build and deploy the dockerfile

To Test the deployment image run

```bash
docker image build . -f ./deployment/Dockerfile -t test
docker run -it -p 5790:80 test
```