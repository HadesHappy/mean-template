# Project N

## Architecture

Solution **Stack** = set of software subsystems or components needed to create a complete platform.

***What is a MEAN Stack Application?***

MEAN is a Full-stack JavaScript/Typescript Solution that helps you build fast, robust and maintainable production web application using **M**ongoDB, **E**xpress, **A**nguar and **N**ode.js.

![Image of Yaktocat](https://www.netsolutions.com/insights/wp-content/uploads/2019/02/architecture-of-meanstacktechnology.jpg)

There are many alternative e.g. MAD (MongoDB, Angular & Django) but here we have decided to implement the most common MEAN Stack.

### Docker-rising the Stack

To simplify the development experience and facilitate pushing to production, the stack is Dockerised. This allows a developer to easily work on the whole stack locally on his machine and push to production on a stack that matches exactly the development stack. It is an abstraction layer, a container for the entire solution. It can be thought of as a virtual environment for your entire solution. All of the necessary services (MongoDB, Node.js,...) are listed in a Docker Compose configuration.

As seen on the MEAN architecture diagram we are going to need 3 containers in the stack:

- Angular
- NodeJS & ExpressJS
- MongoDB

## Development Workflow

Prerequisites:

- Docker
- Docker Compose

### Testing the waters on first installation...

`git clone ...`

`cd /<WHEREVER YOU ARE>/project-n`

#### Manual Configuration

##### Building Client Container

`docker build -t client:dev ./client` - builds the image

**/!\ You may have issue running Docker as non-root, if the command fails you can try with `sudo`**

`docker run -d --name client -p 4200:4200 client:dev` - runs the image

Wait a little while (10-30 sec) for the container to run `ng serve` and access the angular server on http://localhost:4200/.

`docker stop angular-client`

##### Building Express/NodeJS Container

`docker build -t express-server:dev ./express-server`

`docker run -d --name express-server -p 3000:3000 express-server:dev`

`docker stop express-server`

##### MongoDB Container

This is not a custom container (no custom code) hence we are using the default Dockerfile directly from DockerHub which is nicely pre-configured. The `docker run` pulls the Dockerfile directly from DockerHub so no need to build it beforehand.

`docker run -d --name mongodb -p 27017:27017 mongo`

`docker stop mongodb`

#### Automated Configuration (using Docker Compose)

`docker-compose up` - That's it! It gets the full Stack up and running with a single command.

`docker-compose down`

### In active development

#### Running & Working on the entire stack

It is recommended to use the Automated Configuration while developing on this project. Run the `docker-compose up` command and develop as usual across the entire stack.
To isolate each service you can specefy what server you want to start in each terminal - Beware, they are all dependent on each other.
`docker-compose up api`
`docker-compose up database`
`docker-compose up client` - the angular project needs to be renamed

use http://127.0.0.1:4200/ - using localhost causes some problems with cookies

#### Persistent DB Data

The database data is persistent between docker sessions - this means that when you populate the database with test data it will keep the data across sessions.

To remove all DB data and start from a clean DB:

`docker volume ...`

## Going Into Production



## References

MEAN Dockerised Stack

https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose