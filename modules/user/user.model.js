// repository, dal, access
const { Model } = require ('sequelize');

module.exports = function(sequelize, DataTypes) {

    class User extends Model {

        // specifications des relations entre les tables, entités. (one-to-one, one-to-many, many-to-many)
        static associate(models) {

        }
    }

    // creation et initialisation de l'entite de Sequilize ( definitoin colonnes des tables )
    User.init(
        {
            username: { type: DataTypes.STRING, allowNull: false, unique: true },
            password: { type: DataTypes.STRING, allowNull: false}
        },{
            sequelize,
            modelName: 'Users' // au pluriel ,norme sequelize non obligatoire

        }
    );

    return User;
}
