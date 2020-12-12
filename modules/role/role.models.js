const { Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    class Role extends Model {
        static associate(models) {

        }
    }
    
    Role.init({
        label: { type: DataTypes.STRING, allowNull: true}
    },{
        sequelize,
        modelName: 'Roles'
    });
}