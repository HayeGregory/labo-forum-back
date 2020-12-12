const fs = require('fs/promises'); // a partir d'une promesse
const path = require('path');

// ici tous les elements que je veux exporter

module.exports.DB_PATH = path.join(__dirname, '..', 'db', 'users.json' );

module.exports.readDB = function (path) {
    return new Promise ((resolve, reject) => {
        fs.readFile(path)
            .then(rawData => resolve(JSON.parse(rawData.toString())))
            .catch(err => reject(err));
    });
}

module.exports.writeDB = function (path, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, "\t"))
            .then( _ => resolve())
            .catch( err => reject(err));
    });
}

