const { sq } = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const subCategories = sq.define('subCategories', {
    subCategories_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    categories_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subCategories_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = subCategories;
