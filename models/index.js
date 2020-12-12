// const UserModel = require("../modules/user/user.model");
// db["Users"] = UserModel(sequelize, DataTypes);
// simplification : require(...)(...)

// pour avoir l'autocompletion {} mais normalement pas de {}
const {Sequelize, DataTypes} = require("sequelize");

const path = require('path');
const db = {}; // objet vide

let sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: path.join(__dirname, '..', 'db', 'db.sqlite3')
});

db["Users"] = require("../modules/user/user.model")(sequelize, DataTypes);

db['sequelize'] = sequelize; // l'instance de sequelize
db['Sequelize'] = Sequelize; // le type de la donnee, pour acceder aux fonctions statiques :)

module.exports = db;
