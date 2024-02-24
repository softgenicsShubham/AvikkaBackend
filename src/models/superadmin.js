const { Sequelize, DataTypes } = require('sequelize');
const {sq} = require("../config/db");

const admin =sq.define('super_admin', {
    admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    admin_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = admin;

