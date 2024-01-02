const { Sequelize, DataTypes } = require('sequelize');
const {sq} = require('../config/db'); // Import your Sequelize instance

const usedOffer = sq.define('usedOffer', {
    usedOffer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
  offer_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id:{
    type:DataTypes.STRING,
    allowNull:false
  }
 
});

module.exports = usedOffer;
