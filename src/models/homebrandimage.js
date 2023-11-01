const {sq}=require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');
const Brand = require('./Brand');

const Homebrandimage=sq.define('homebrandimage',{
    brand_image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    
      brand_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Brand,
            key: 'brand_id'
        }
    },
    brand_image:{
        type: DataTypes.STRING,
        allowNull: false

    },

},
{
    timestamps: false,
    freezeTableName: true,
})
module.exports=Homebrandimage
Homebrandimage.belongsTo(Brand,{foreignKey:'brand_id'})