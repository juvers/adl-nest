### Quick Start
### Install Dependencies
- install nest and create new app
> npm i -g @nestjs/cli
> nest new adl-nest

- install dependencies (typeorm & pg)
> npm install @nestjs/typeorm typeorm pg

- add env file
>POSTGRES_HOST=127.0.0.1
>POSTGRES_PORT=5432
>POSTGRES_USERNAME=postgres
>POSTGRES_PASSWORD=<db-pwd>
>POSTGRES_DATABASE=<db-name>