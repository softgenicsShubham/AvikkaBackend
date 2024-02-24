const { Sequelize, DataTypes } = require('sequelize');
const { sq } = require("../config/db");

const subadmin = sq.define('sub_admin', {
    admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admin_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    addProduct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Default value is false
    },
    manageProduct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    addOffers: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    addFreeGift: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    manageSpecification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    productPermission: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    manageBanner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    manageOrders: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    handleSeller: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
categorisState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    subCategorisState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    itemState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    brandState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    addVideoState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    specificationDetailsState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    manageThumbnailState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    productEditState: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

module.exports = subadmin;

