// npm init
// npm install : express, nodemon, body-parser

// User > index > Controller & router > dbutils
const { UserRouter } = require('./modules/user');

const bodyParser = require('body-parser');
const express = require('express');
const logger = require('./utils/logger.util');
const path = require('path');
const fs = require('fs/promises'); // a partir d'une promesse

const app = express();
// use :  body parser demande une autre syntaxe que app.use(bodyparser)
// car 2 middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', UserRouter);

// a supprimer : starting index - debugging
logger.info("Starting", "=============================================================================================") 
logger.info("Starting", "start index.js") 
logger.info("Starting", "=============================================================================================")
// path pour mon json users
const pathDB = path.join(__dirname, 'db', 'users.json');



//#region Ancien code sans pattern

// // methode lecture du users.json
// function readJsonFile(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path)
//         .then(rawData => resolve(JSON.parse(rawData.toString())))
//         .catch (err => reject(err));
//     })
// }

// function writeJsonFile(path, data) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path, JSON.stringify(data, null, "\t"))
//         .then(_ => resolve())
//         .catch(err => reject(err));
//     })
// }

// // API 
// // getall
// app.get('/user', (req, res) => { 
//     readJsonFile(pathDB)
//     .then ( data => res.json( data))
//     .catch( err => res.status(500).jsonp({error: err.message}));
// });

// // getbyid :  l'id speficie en numerique positif
// app.get('/user/:id([0-9]+)', (req, res) => {
//     readJsonFile(pathDB)
//     .then(({users}) => {
//         const user = users.find(u => u.id == req.params.id)
//         logger.debug("Check-VAR", user);
        
//         res.jsonp(user);
//     })
//     .catch( err => res.status(500).jsonp({error : err.message}));
// });

// // create
// app.post('/user', (req, res) => {
//     readJsonFile(pathDB)
//     .then(data  => {
//         //  bug first id == null 
//             let lastID = Math.max(...data.users.map(u => u.id));

//             const user = req.body;
//             logger.debug("id", lastID);
//             user.id = lastID + 1;

//             data.users.push(user);
//             writeJsonFile(pathDB, data)
//                 .then (_ => logger.info("App", `user created : ${user}` ))
//                 .catch(err => logger.error("app.createUser", err.message));

//             res.jsonp(user);
//         })
//         .catch(err => res.status(500).jsonp({error: err.message})); 
// });

// // update
// app.put('/user/:id([0-9]+)', (req, res) => {
//     readJsonFile(pathDB)
//         .then((data) => {
//             const userIndex = data.users.findIndex(u => u.id == req.params.id);
            
//             const updateUser = req.body;
//             updateUser.id = data.users[userIndex].id;
//             data.users[userIndex] = updateUser;

//             writeJsonFile(pathDB, data)
//                 .then(_ => logger.info("user updated", `user ${req.params.id} updated`))
//                 .catch(err => logger.error("App.update", err.message));

//             res.jsonp(updateUser);
//         })
//         .catch(err => res.status(500).jsonp({error : err.message}));
// })
//#endregion

//#region test logger
// logger testing
// logger.info('index.js', 'test logger info' );
// logger.debug('index.js', 'test logger debug' );
// logger.error('index.js', 'test logger error' );
//#endregion

// start server
const serverInfo = { ip : '127.0.0.1', port : 3000 };
app.listen( 3000, () => { 
    logger.info("index.js", `app started at : ${serverInfo.ip}:${serverInfo.port} ...`) 

});