// Registration.js
const { Sequelize, DataTypes } = require('sequelize');
const { sq } = require('../config/db'); // Import your Sequelize instance

const registration = sq.define('registration', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'GUEST',
  },
  mobile_num: {
    type: DataTypes.STRING,
    // unique: true,
     allowNull: false,
  },
  email_id: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.DATE,
  },
  referal_code:{
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Set the default value to the current timestamp
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
  },

},
  {
    // timestamps: false,
    freezeTableName: true,
  }
);

module.exports = registration;
