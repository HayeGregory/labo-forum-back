const fs = require('fs/promises');
const path = require('path');

module.exports.DB_PATH = path.join(__dirname, '..', 'db', 'nomdb' );

module.exports = function readDB (path) {
    return new Promise ((resolve, reject) => {
        fs.readFile(path)
            .then(rawData => resolve(JSON.parse(rawData.toString())))
            .catch(err => reject(err));
    });
}

module.exports = function writeDB (path, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, "\t"))
            .then( _ => resolve())
            .catch( err => reject(err));
    });
}

