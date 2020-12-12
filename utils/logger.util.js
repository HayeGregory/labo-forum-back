// require 
// npm i : chalk, moment
const chalk = require('chalk');
const moment = require('moment');
const fs = require('fs/promises'); // pour les fichiers
const path = require('path'); // pour le path

class Logger {

    info (contex, message) {
        const log = `[ ${contex} ] [ ${moment().format('LLL')} ] [ INFO ] : ${JSON.stringify(message,null,"\t") } `;
        console.info(chalk.green(log));
    }

    debug (contex, message) {
        const log = `[ ${contex} ] [ ${moment().format('LLL')} ] [ DEBUG ] : ${JSON.stringify(message,null,"\t") } `;
        console.debug(chalk.cyan(log));
    }

    error (contex, message) {
        const log = `[ ${contex} ] [ ${moment().format('LLL')} ] [ ERROR ] : ${JSON.stringify(message, null, "\t") } `;
        console.error(chalk.red(log));

        console.debug("path", __dirname);

        fs.appendFile(path.join(__dirname, ".." , "logs", "error.log"), `${log}\n`)       
            .then(_ => this.info(Logger.name,path.join(__dirname, ".." , "logs", "error.log") ))
            .catch(error => this.info("Error File log", error.message ))

    }
}

module.exports = new Logger();