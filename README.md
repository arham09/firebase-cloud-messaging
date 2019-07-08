# REST Service For Firebase Cloud Messaging
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/Dependencies-Amqplib-green.svg)
![](https://img.shields.io/badge/Dependencies-Firebaseadmin-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

## Overview
```
This repository is created to learn about Message Broker system and Firebase Cloud Messaging.
```

## Postman Documentation
```
https://documenter.getpostman.com/view/2709086/SVSDQrSs?version=latest
```

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.  
- RabbitMQ - Download and Install [RabbitMQ](https://www.rabbitmq.com/download.html) - RabbitMQ is the most widely deployed open source message broker.

## Installation
### Clone
```
$ git clone git@github.com:arham09/cloud-messaging-service.git
$ cd cloud-messaging-service
```

### Firebase Service Configuration
```
$ cd /packages/notification_service/src/lib
$ change serviceAccount to your Firebase Private Key
$ change databaseURL in /src/lib/firebase.js
$ npm install
$ npm start
```

### Gateway Server
```
$ cd /packages/gateway
$ npm install
$ npm start
```

### License
----

[Beerware](https://en.wikipedia.org/wiki/Beerware "Beerware") © [Arham](https://github.com/arham09 "Arham")
