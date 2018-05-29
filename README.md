# NeedPC API

## Installation

### Sequelize CLI



#### Documentation

You can consult the Sequelize CLI documentation : [http://docs.sequelizejs.com/manual/tutorial/migrations.html#the-cli](http://docs.sequelizejs.com/manual/tutorial/migrations.html#the-cli)   
Repository : [https://github.com/sequelize/cli](https://github.com/sequelize/cli)


### Docker

First [install Docker](https://docs.docker.com/engine/installation/).

#### Build image

* Create the new image by executing the command `docker build -t <your_image_name> .`,
* Once again on the console `docker run -p 8080:8080 -d <your_image_name>`.


### Starting the application

#### Development

Launch the application with the command : `nodemon server.js`   
The server will restart each time the code is changed.

#### Basic

Launch the application with the command: `npm start` or ` node server.js`

#### Production with Docker

* Build : `docker-compose build`,
* Launch : `docker-compose up -d`

### Customize

Changing the value of the following environment variables :
- **NODE_ENV** (default: `development`),
- **APP_REDIS_HOST** (default: `127.0.0.1`),
- **APP_REDIS_PORT** (default: `6379`),
- **APP_HTTP_PORT** (default: `8080`),
- **APP_SESSION_SECRET** (default: `RANDOM`).


## Constitution

This project was realized with the following tools :
* NodeJS,
* Express,
* Sequelize (ORM & CLI),
* Request, Mocha (functionnal tests),
* Docker