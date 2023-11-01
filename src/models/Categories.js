const { sq } = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const categories = sq.define('categories', {
    categories_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categories_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
});

module.exports = categories;
