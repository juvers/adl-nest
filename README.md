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


### Create Table
> CREATE TABLE devs (
>    id SERIAL PRIMARY KEY,
>    firstname VARCHAR(255),
>    lastname VARCHAR(255),
>    squad VARCHAR(255),
>    yearofservice INTEGER,
>    role VARCHAR(255),
>    experience INTEGER,
>    salary NUMERIC,
>    preferredlanguage VARCHAR(255),
>    stacklayer VARCHAR(255),
>    tierlevel INTEGER,
>    coreskills TEXT[],
>    image VARCHAR(255)
>);

