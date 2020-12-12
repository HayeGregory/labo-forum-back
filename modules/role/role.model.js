const { Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    class Role extends Model {
        static associate(models) {
            Role.belongsToMany(models.Users, {through: "User_roles"})
        }
    }
    
    Role.init({
        label: { type: DataTypes.STRING, allowNull: true}
    },{
        sequelize,
        modelName: 'Roles'
    });

    return Role;
}