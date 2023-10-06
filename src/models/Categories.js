const { sq } = require('../config/db')
const { Sequelize, DataTypes} = require('sequelize');

const cetegories = sq.define('cetegories', {
    categories_name:{
        type:DataTypes.STRING,
        allowNull: false,

    },
    categories_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
})
module.exports = cetegories;