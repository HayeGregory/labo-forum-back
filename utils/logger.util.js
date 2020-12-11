// require 
// npm i : chalk, moment
const chalk = require('chalk');
const moment = require('moment');
// const fs = require('fs/promises'); // pour les fichiers
// const path = require('path'); // pour le path

class Logger {

    info (contex, message) {
        const log = `[ ${contex} ] [ ${moment().format('LLL')} ] [ INFO ] : message `;
        console.info(chalk.green(log));
    }

}

module.exports = new Logger();