const {sq}=require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');

const Brand=sq.define('brand',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    
    brand_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    brand_type:{
        type:DataTypes.STRING,
        allowNull:false

    }

},{
    timestamps: false,
    freezeTableName: true,
})
module.exports=Brand