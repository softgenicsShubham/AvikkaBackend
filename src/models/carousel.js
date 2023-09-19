const {sq}=require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');

const Carousel = sq.define('carousel',{
    product_categories:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    brand_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    place:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    image_url:{
        type:DataTypes.STRING,
        allowNull:false
    }
}) 

module.exports = Carousel;