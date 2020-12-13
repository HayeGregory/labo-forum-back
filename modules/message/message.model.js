const { Model, DataTypes } = require('sequelize');

/**
 * 
 * @param {DataTypes} dataTypes 
 */
module.exports = function (sequelize, dataTypes) {

    class Message extends Model {
        static associate(models) {
            // ..
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