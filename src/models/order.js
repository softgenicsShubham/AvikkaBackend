const { sq } = require('../config/db')
const { Sequelize, DataTypes, BelongsTo } = require('sequelize');
const OrderItem = require('./OrderItem')
const registration = require('./registration');


const Order = sq.define('Order', {
    order_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
    },
    CustomerAddress: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    PaymentMethod: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    TransactionID: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    PaymentStatus: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    OrderStatus: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    shipped: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    delivered:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    // CourierService: {
    //   type: DataTypes.STRING(50),
    //   allowNull: false,
    // },
    ShippingCost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    TrackingNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    ExpectedDeliveryDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    OrderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    TotalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    // DiscountCode: {
    //   type: DataTypes.STRING(50),
    //   allowNull: true,
    // },
    DiscountAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: registration,
            key: 'user_id'
        }
    },

});
registration.hasMany(Order)
Order.belongsTo(registration)
module.exports = Order ;

// Create an association between Product and Order
// Order.belongsToMany(Products, {
//   through: 'OrderProducts', // This is the name of the join table
//   foreignKey: 'orderId',
// });

// Products.belongsToMany(Order, {
//   through: 'OrderProducts',
//   foreignKey: 'productId',
// });


// registration.hasMany(Order)
// Order.belongsTo(registration)

