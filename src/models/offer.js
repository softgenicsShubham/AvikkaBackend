// Offer.js
const { Sequelize, DataTypes } = require('sequelize');
const { sq } = require('../config/db')

const Products = require('./products'); // Import the "Product" model

const Offer = sq.define('offer', {
    offer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,

  },
  discountType: {
    type: DataTypes.ENUM('flat', 'percentage', 'buy-one-get-one','Buy 2 Get Free Gift'),
    allowNull: false,
  },
  discountValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  termsAndConditions:{
    type: DataTypes.TEXT,
    allowNull: false,


  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,

  },
},
{
    timestamps: false,
    freezeTableName: true,
 

});


module.exports=Offer
// module.exports = Offer;
// Create an association between Product and Offer

  
Offer.belongsToMany(Products, {
    through: 'ProductOffer', // This is the name of the join table
    foreignKey: 'offerId',
  });
  
  Products.belongsToMany(Offer, {
    through: 'ProductOffer',
    foreignKey: 'productId',
  });

  //   startDate: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   endDate: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   couponCode: {
//     type: DataTypes.STRING,
//   },
//   usageLimits: {
//     type: DataTypes.INTEGER,
//   },