const { Model, DataTypes } = require ('sequelize');

/**
 * @param {DataTypes} DataTypes 
 */

module.exports = function (sequelize, DataTypes) {

    class Discussion extends Model {
        /**
         * 
         * @param {{Messages}} models 
         */
        static associate(models) {
            Discussion.hasMany(models.Messages)
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
