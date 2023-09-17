const {Sequelize,DataTypes}=require('sequelize')
const {sq}=require('../config/db')
const Products=require('../models/products')
const ProductsImages=sq.define('productsImages',{
image_id:{
    type:DataTypes.INTEGER,

    allowNull:false,
    primaryKey:true,
    autoIncrement:true
},
product_id:{
    type:DataTypes.INTEGER,
    allowNull:false,

},
image_description:{
type:DataTypes.TEXT,
    allowNull:false,

},
image_url:{
    type:DataTypes.STRING,
    allowNull:false,

},
isPrimary:{
type:DataTypes.BOOLEAN,
allowNull:false
}
})
ProductsImages.belongsTo(Products, {foreignKey:'product_id'})
module.exports=ProductsImages