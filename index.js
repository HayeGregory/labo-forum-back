// npm init
// npm install : express, nodemon, body-parser
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('./utils/logger.util');
const path = require('path');
const fs = require('fs/promises'); // a partir d'une promesse
const { writeFile } = require('fs');

const app = express();
// use :  body parser demande une autre syntaxe que app.use(bodyparser)
// car 2 middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// a supprimer : starting index - debugging
logger.info("Starting", "=============================================================================================") 
logger.info("Starting", "start index.js") 
logger.info("Starting", "=============================================================================================")
// path pour mon json users
const pathDB = path.join(__dirname, 'db', 'users.json');


// methode lecture du users.json
function readJsonFile(path) {
    logger.debug("Check-VAR", pathDB);
    return new Promise((resolve, reject) => {
        fs.readFile(path)
            .then(rawData => resolve(JSON.parse(rawData.toString())))
            .catch (err => reject(err));
    })
}

function writeJsonFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, "\t"))
            .then(_ => resolve())
            .catch(err => reject(err));
    })
}

// API
app.get('/user', (req, res) => { 
    readJsonFile(pathDB)
        .then ( data => res.json( data))
        .catch( err => res.status(500).jsonp({error: err.message}));
});

app.get('/user/:id', (req,res) => {

})

app.post('/user', (req, res) => {
    readJsonFile(pathDB)
        .then(data  => {
            //  bug first id == null 
            let lastID = Math.max(...data.users.map(u => u.id));

            const user = req.body;
            logger.debug("id", lastID);
            user.id = lastID + 1;

            data.users.push(user);
            writeJsonFile(pathDB, data)
                .then (_ => logger.info("App", `user created : ${user}` ))
                .catch(err => logger.error("app.createUser", err.message));

            res.jsonp(user);
        })
        .catch(err => res.status(500).jsonp({error: err.message})); 
});

// logger testing
// logger.info('index.js', 'test logger info' );
// logger.debug('index.js', 'test logger debug' );
// logger.error('index.js', 'test logger error' );

// start server
const serverInfo = { ip : '127.0.0.1', port : 3000 };
app.listen( 3000, () => { 
    logger.info("index.js", `app started at : ${serverInfo.ip}:${serverInfo.port} ...`) 

});