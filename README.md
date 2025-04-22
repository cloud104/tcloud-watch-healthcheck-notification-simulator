## Configuração Inicial

- yarn
- yarn global add nodemon

## Iniciar serviço em ambiente de Debug

yarn debug

## Docker

### Build the Image
```bash
docker build -t tcloud-watch-healthcheck-notification-simulator .
```

### Run the Container
```bash
docker run -d -p 3000:3000 --env-file .env tcloud-watch-healthcheck-notification-simulator
```