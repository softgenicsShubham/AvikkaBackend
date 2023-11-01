const { sq } = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');
const registration = require('./registration');

const Address = sq.define('address', {
    addresses_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
   pincode:{
    type:DataTypes.INTEGER,
    allowNull:false
   },
   city:{
    type:DataTypes.STRING,
    allowNull:false
   },
   state:{
    type:DataTypes.STRING,
    allowNull:false

   },
   house_flat_office_no:{
    type:DataTypes.STRING,
    allowNull:false

   },
   address:{
    type:DataTypes.STRING,
    allowNull:false

   },
   landmark:{
    type:DataTypes.STRING,
    allowNull:true

   },
   contact_name:{
    type:DataTypes.STRING,
    allowNull:false

   },
   contact_number:{
    type:DataTypes.BIGINT,
    allowNull:false

   },
   address_type:{
    type:DataTypes.STRING,
    allowNull:false

   },
   user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: registration,
        key: 'user_id'
    }
},

},
    {
        freezeTableName: true,
        timestamps: true,

    }
)
module.exports = Address;

// registration.hasMany(Address, { foreignKey: 'user_id' });
Address.belongsTo(registration, { foreignKey: 'user_id' });
