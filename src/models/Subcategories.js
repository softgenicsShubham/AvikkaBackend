const { sq } = require('../config/db')
const { Sequelize, DataTypes} = require('sequelize');

const subCetegories = sq.define('subCetegories', {
    categories_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    subCetegories_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    subCetegories_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
})
module.exports = subCetegories;