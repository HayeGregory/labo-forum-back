const { Model, DataTypes } = require ('sequelize');

/**
 * @param {DataTypes} DataTypes 
 */

module.exports = function (sequelize, DataTypes) {

    class Discussion extends Model {

        static associate(models) {
            Discussion.hasMany(models.Messages);
            Discussion.belongsTo(models.Users);
            Discussion.belongsToMany(models.Users, {as: 'moderator' ,through: "User_Moderate_Discussions"});
            Discussion.belongsToMany(models.Users, {as: 'follower' ,through: "User_Follow_Discussions"});
        }

    }

    Discussion.init({
        subject: { type: DataTypes.STRING, allowNull: false},
        isPrivate: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
    },{
        sequelize,
        modelName: "Discussions"
    });

    return Discussion;
}

