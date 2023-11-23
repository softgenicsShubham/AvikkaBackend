// OrderItem.js
const { sq } = require('../config/db')
const { Sequelize, DataTypes, BelongsTo } = require('sequelize');
const  Order  = require('./order'); // Adjust the file name based on your actual file structure
const Products = require('./products');

const OrderItem = sq.define('OrderItem', {
  orderItemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  orderId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Order,
      key: "order_id"
    }
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: 'product_id'
    }
  },

});
Order.hasMany(OrderItem, { foreignKey: 'orderId' })
OrderItem.belongsTo(Order, { foreignKey: 'orderId' })
Products.hasMany(OrderItem, { foreignKey: 'product_id' })
OrderItem.belongsTo(Products, { foreignKey: 'product_id' })

module.exports = OrderItem;

