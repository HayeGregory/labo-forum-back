// npm init
// npm install : express, nodemon, body-parser, sequelize sqlite3
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('./utils/logger.util');

const { UserRouter, ModeratorRouter } = require('./modules/user');
const { RoleRouter } = require('./modules/role');
const { DiscussionRouter } = require('./modules/discussion');
const { MessageRouter } = require('./modules/message'); 

const db = require('./models');
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router > controller >
app.use('/user', UserRouter);
app.use('/moderator', ModeratorRouter);
app.use('/role', RoleRouter);
app.use('/discussion', DiscussionRouter);
app.use('/message', MessageRouter);

// synchroniser la db
db.sequelize.sync( )
    .then (_ => logger.info("Index.js APP", "Db synchronizee ... "));

// start server
const serverInfo = { ip: "127.0.0.1", port: 3000, routes: [
    { 
        url: '/user', 
        methods: ["GET", "POST"]
    }    
]};

app.listen( 
    serverInfo.port, 
    () => { 
        logger.info("App", `L'app est démarrée sur : ${serverInfo.ip}:${serverInfo.port} ...`) 
    }
);