// // Quantity.js
const { Sequelize, DataTypes } = require('sequelize');
const { sq } = require('../config/db')

const Quantity = sq.define('quantity', {
    quantity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity_value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Quantity;
