const { sq } = require('../config/db')
const { DataTypes ,Sequelize,BelongsTo} = require('sequelize');
const Video = require('./Video');





const Videothumnail = sq.define('Videothumnail', {
  Videothumnail_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  thumbnail_url:{
    type: DataTypes.STRING,
    allowNull: false,

  },

});


module.exports = Videothumnail

// Videothumnail.hasMany(Video,{foreignKey:'Videothumnail_id'})
// Videothumnail.belongsTo(Video,{foreignKey:'video_id'})
