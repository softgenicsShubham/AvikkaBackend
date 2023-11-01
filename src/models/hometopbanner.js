const {sq}=require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');

const Hometopbanner=sq.define('hometopbanner',{
    top_banner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    
    home_top_banner_image:{
        type: DataTypes.STRING,
        allowNull: false

    },
    imageType:{
        type: DataTypes.STRING,
        allowNull: false, // You can adjust this as needed
    
    }

},
{
    timestamps: false,
    freezeTableName: true,
})
module.exports=Hometopbanner
