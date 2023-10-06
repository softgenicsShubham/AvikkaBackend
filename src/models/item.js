const { sq } = require('../config/db')
const { Sequelize, DataTypes} = require('sequelize');

const item = sq.define('item', {
    subCetegories_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    item_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    item_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
})
module.exports = item;