// repository, dal, access
const { Model, DataTypes } = require ('sequelize');

/**
 * @param {DataTypes} DataTypes
 */

module.exports = function(sequelize, DataTypes) {

    class User extends Model {

        // specifications des relations entre les tables, entités. 
        // (one-to-one, 
        // one-to-many, belongto - hasmany
        // many-to-many : belongtomany - belongstomany
        // timestamp false pour qu'il ne rajoute pas les colone created et updated
        static associate(models) {
            User.belongsToMany(models.Roles, {through: "User_Roles" , timestamps: false}); 
            User.hasMany(models.Discussions);
            User.belongsToMany(models.Discussions, {through: "User_Moderate_Discussions"});
        }
    }

    // creation et initialisation de l'entite de Sequilize ( definition colonnes des tables )
    User.init(
        {
            username:   { type: DataTypes.STRING, allowNull: false, unique: true },
            password:   { type: DataTypes.STRING, allowNull: false},
            email:      { type: DataTypes.STRING, allowNull: false},
            avatar:     { type: DataTypes.STRING, allowNull: false},
            lastname:   { type: DataTypes.STRING, allowNull: false},
            firstname:  { type: DataTypes.STRING, allowNull: false},
            isActive:   { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true} // default  ? hook beforeValidate ?
            
        },{
            sequelize,
            modelName: 'Users' // au pluriel ,norme sequelize non obligatoire

        }
    );

    return User;
}
