// ProductOffer.js
const { sq } = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');

const ProductOffer = sq.define('product_offer', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  offerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
    timestamps: false,
    freezeTableName: true,
}

);

module.exports = ProductOffer;
