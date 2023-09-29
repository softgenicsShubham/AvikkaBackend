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
    allowNull: false,
    unique: true,
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

},
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = registration;
