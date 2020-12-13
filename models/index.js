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

// mes modeles que j'utilise
db["Users"] = require("../modules/user/user.model")(sequelize, DataTypes);
db["Roles"] = require("../modules/role/role.model")(sequelize, DataTypes);
db["Discussions"] = require("../modules/discussion/discussion.model")(sequelize, DataTypes);

// parcourir les objets de la db
Object.keys(db).forEach( model => {
    if (db[model].associate) {
        db[model].associate(db);
    }
})

db['sequelize'] = sequelize; // l'instance de sequelize
db['Sequelize'] = Sequelize; // le type de la donnee, pour acceder aux fonctions statiques :)

module.exports = db;
