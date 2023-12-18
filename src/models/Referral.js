// Registration.js
const { Sequelize, DataTypes } = require('sequelize');
const { sq } = require('../config/db'); // Import your Sequelize instance

const referral = sq.define('referral', {
  referral_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  sender_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reciever_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  referral_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   status: {
    type: DataTypes.BOOLEAN,
    allowNull: false, // or true if the status can be null
    defaultValue: false // or true based on the default value you prefer
    // Other constraints or properties...
  },
  

},
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = referral;
