const { Sequelize, DataTypes } = require('sequelize');
const {sq} = require('../config/db'); // Import your Sequelize instance

const Wallet = sq.define('wallet', {
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
  balance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currency_type:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  user_id:{
    type:DataTypes.STRING,
    allowNull:false
  }
});

module.exports = Wallet;
