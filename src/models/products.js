const { sq } = require('../config/db')
const { Sequelize, DataTypes,BelongsTo } = require('sequelize');
const Brand=require('./Brand')
const categories = require('./Categories'); // Import the "cetegories" model
const subCategories = require('./Subcategories'); // Import the "subCetegories" model
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
    }
    ,
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
    timestamps: false,
    freezeTableName: true,
 
})

module.exports=Products

// Products.belongsTo (sellers,{foreignKey: "sellers_id"})
Products.belongsTo(Brand,{foreignKey:'brand_id'})
// Products.belongsTo(cetegories,{foreignKey:'product_id'})

// Products.belongsTo(subCetegories,{foreignKey:'brand_id'})

// Products.belongsToMany(categories,{through:"productcategories", foreignKey:'product_id'})
// Products.belongsToMany(Color, { through: 'product_colors', foreignKey: 'product_id' });
// Products.belongsToMany(Quantity, { through: 'product_quantities', foreignKey: 'product_id' });
// Products.hasMany(Video, { foreignKey: 'product_id' });

