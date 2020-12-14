const { Model, DataTypes } = require('sequelize');
const { Database } = require('../../models');

/**
 * 
 * @param {DataTypes} dataTypes 
 */
module.exports = function (sequelize, dataTypes) {

    class Message extends Model {
        /** 
         * @param {Database} models
         */
        static associate(models) {
            Message.belongsTo(models.Discussions )
        }
    }

    Message.init({
        contenu: { type: dataTypes.STRING, allowNull: false }
    },{
        sequelize,
        modelName: "Messages"
    })

    return Message;
}