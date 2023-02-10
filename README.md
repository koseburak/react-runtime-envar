# react-runtime-envar
Set the runtime variables of React apps using environment variables


## Build the docker image and run container

Build the docker image;
```sh
docker build -f .devops/Dockerfile -t react/runtime-envars .
```

Run the container using DEV envars(default);
```sh
docker run -d -p 3001:80 --name react-dev -t react/runtime-envars
```

Run the container using STG envars;
```sh
docker run -d -p 3002:80 --name react-stg -e DOC_TITLE=STG -e API_URL=https://stg.api.com -t react/runtime-envars
```

Run the container using PRD envars(default);
```sh
docker run -d -p 3003:80 --name react-prd -e DOC_TITLE=PRD -e API_URL=https://prd.api.com -t react/runtime-envars
```
