const { Sequelize, DataTypes } = require('sequelize');
const {sq} = require('../config/db'); // Import your Sequelize instance

const Transacation = sq.define('transacation', {
    t_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
  transaction_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  amount:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  sender_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  receiver_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: false, // or true if the status can be null
    defaultValue: false // or true based on the default value you pre
  }
  
});

module.exports = Transacation;
