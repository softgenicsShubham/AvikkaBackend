const { sq } = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');
const Brand=require('./Brand')
const categories = require('./Categories'); // Import the "cetegories" model
// const ProductOffer = require('./productoffer'); // Import the "ProductOffer" model
// const Offer = require('./offer'); 
const Color = require('./color'); // Import the "Color" model
// const Specification=require('./specification')
const subCategories = require('./Subcategories'); // Import the "subCetegories" model
// const OrderItem=require('./OrderItem')
const Products = sq.define('products', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    product_categories: {

        type: DataTypes.STRING,
        allowNull: false
    },
    brand_id: {
        type: DataTypes.INTEGER, // Update data type to match the primary key of the 'brand' table
        allowNull: false,
    },
    product_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    product_price: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    product_thumnail_img: {
        type: DataTypes.STRING,
        allowNull: false

    },
    product_detail_allimage:{
        type: DataTypes.JSON,
        allowNull: false  
    },
    product_ad: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    count_in_stock:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
        
    },
    offer: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating:{
        type: DataTypes.FLOAT,
        allowNull: true

    },
    discount:{
        type: DataTypes.FLOAT,
        allowNull: true

    },
    ideal_for:{
        type: DataTypes.JSON, // Replace STRING with the appropriate data type for your array elements
        allowNull: true
        // ARRAY(DataTypes.STRING)
    },
    product_work_for:{
        type: DataTypes.JSON, // Replace STRING with the appropriate data type for your array elements
        allowNull: true

    },
    highlights:{
        type: DataTypes.STRING,
        allowNull: true

    },
    product_expiry_date:{
        type: DataTypes.STRING,
        allowNull: false

    },
    categories_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: categories,
            key: 'categories_id'
        }

    },
    subCategories_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:subCategories,
            key:'subCategories_id'
        }

    },
    place:{
        type: DataTypes.STRING,
        allowNull: true,

    },
    product_color:{
        type: DataTypes.JSON,
        allowNull: true,
    },
    product_quantity:{
        type: DataTypes.JSON,
        allowNull: true,
    },
    seller_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    newlaunchage_product: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    product_description_allimg:{
        type: DataTypes.JSON,
        allowNull: true  
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
    freezeTableName: true,
 
})
module.exports=Products

// Products.belongsTo (sellers,{foreignKey: "sellers_id"})
Products.belongsTo(Brand,{foreignKey:'brand_id'})
// Products.belongsTo(Specification, { foreignKey: 'product_id' });

// ...

// Define the many-to-many relationship with Color

// ...
// Products.hasMany(OrderItem);
// OrderItem.belongsTo(Products);