// npm init
// npm install : express, nodemon, body-parser
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('./utils/logger.util');

const app = express();
// use :  body parser demande une autre syntaxe que app.use(bodyparser)
// car 2 middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [];

// API

app.get('/user', (req, res) => { 
    res.json({users})
});

app.post('/user', (req, res) => {

    users.push(req.body);
    console.log(req.body);

    res.json({users});

})

// logger testing
// logger.info('index.js', 'test logger info' );
// logger.debug('index.js', 'test logger debug' );
// logger.error('index.js', 'test logger error' );

// start server
const serverInfo = { ip : '127.0.0.1', port : 3000 };
app.listen( 3000, () => { logger.info("index.js", `app started at : ${serverInfo.ip}:${serverInfo.port} ...`) });