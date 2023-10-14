const { sq } = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');
const registration = require('./registration');
const Products = require('./products');

const Wishlist = sq.define('wishlist', {
    wishlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: registration,
            key: 'user_id'
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Products,
            key: 'product_id'
        }
    },

},
    {
        freezeTableName: true,
        timestamps: true,

    }
)
module.exports = Wishlist;

// Products.hasMany(Cart)
// registration.hasMany(Cart)
// // Cart.belongsTo(Products)
// Cart.belongsTo(registration)

// Cart.belongsTo(Products, { foreignKey: 'product_id' });
Wishlist.belongsTo(Products,{foreignKey: 'product_id'})
