// Color.js
const { Sequelize, DataTypes } = require('sequelize');
const { sq } = require('../config/db')

const Color = sq.define('color', {
    color_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    color_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Color;
