// ProductOffer.js
const { sq } = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');

const ProductOffer = sq.define('ProductOffer', {
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
 
  tableName: 'Product_Offer',
    timestamps: false,
    freezeTableName: true,
}

);

module.exports = ProductOffer;
