const { Sequelize, DataTypes } = require('sequelize');
const {sq} = require('../config/db'); // Import your Sequelize instance

const Banner = sq.define('banner', {
  Brand_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_name:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  place:{
    type:DataTypes.STRING,
    allowNull:false
  }
});

module.exports = Banner;
