// specification.js
const { DataTypes } = require('sequelize');
const { sq } = require('../config/db');
const Products = require('./products');

const Specification = sq.define('Specification', {
  Specification_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  skin_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hair_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  benefits: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primary_concerns: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: 'product_id',
    },
  },
});


module.exports = Specification;
Products.hasOne(Specification,{foreignKey:'product_id'});
