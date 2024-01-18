const { Sequelize, DataTypes } = require('sequelize');
const {sq} = require("../config/db");

const gift =sq.define('gift', {
    gift_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = gift;


