const { sq } = require('../config/db')
const { Sequelize, DataTypes, BelongsTo } = require('sequelize');
const registration = require('./registration');
const Bank_detail = sq.define('bank_detail', {
    bank_detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Account_number: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Account_holder_name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    ifsc_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER, // Update data type to match the primary key of the 'brand' table
        allowNull: false,
        references: {
            model: registration,
            key: "user_id"
        }

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
        timestamps: true,
        freezeTableName: true,

    })
module.exports = Bank_detail

Bank_detail.belongsTo(registration, { foreignKey: 'user_id' })