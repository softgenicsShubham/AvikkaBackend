const { sq } = require('../config/db')
const { DataTypes, Sequelize } = require('sequelize');
const Products = require('./products');
const Videothumnail = require('./Videothumnail');





const Video = sq.define('video', {
  video_id: {
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
  like: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  shared: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  video_type: {
    type: DataTypes.STRING,
    allowNull: true

  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Videothumnail_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Videothumnail,
      key: 'Videothumnail_id'
    }
  }
});
// Videothumnail.belongsTo(Video, { foreignKey: 'video_id' });

module.exports = Video;


Videothumnail.hasMany(Video, { foreignKey: 'Videothumnail_id' })
Video.hasMany(Videothumnail, { foreignKey: 'Videothumnail_id' })