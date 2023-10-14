const { sq } = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');
const registration = require('./registration');
const Products = require('./products');

const Cart = sq.define('cart', {
    cart_id: {
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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }

},
    {
        freezeTableName: true,
        timestamps: true,

    }
)
module.exports = Cart;

// Products.hasMany(Cart)
// registration.hasMany(Cart)
// // Cart.belongsTo(Products)
// Cart.belongsTo(registration)

// Cart.belongsTo(Products, { foreignKey: 'product_id' });
