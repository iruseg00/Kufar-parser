const Sequelize = require('sequelize');
const sequelize = require ('../config/connect');

var Kufar = sequelize.define(
  'Kufars',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    phone: {
      type: Sequelize.STRING,
      get: function() 
      {
        return JSON.parse(this.getDataValue('phone'));
      }, 
      set: function(val) 
      {
        return this.setDataValue('phone', JSON.stringify(val));
      },
      allowNull: false
    },
    price_byn: {
      type: Sequelize.STRING,
      allowNull: true
    },
    price_usd: {
      type: Sequelize.STRING,
      allowNull: true
    },
    commit: {
      type: Sequelize.STRING,
      allowNull: true
    },
    type: {
      type: Sequelize.STRING,
      allowNull: true
    },
    name_seller: {
      type: Sequelize.STRING,
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    },
    region: {
      type: Sequelize.STRING,
      allowNull: true
    },
    rooms: {
      type: Sequelize.STRING,
      allowNull: true
    },
    house_type: {
      type: Sequelize.STRING,
      allowNull: true
    },
    condition: {
      type: Sequelize.STRING,
      allowNull: true
    },
    year_built: {
      type: Sequelize.STRING,
      allowNull: true
    },
    floor: {
      type: Sequelize.STRING,
      allowNull: true
    },
    size: {
      type: Sequelize.STRING,
      allowNull: true
    },
    size_living_space: {
      type: Sequelize.STRING,
      allowNull: true
    },
    size_kitchen: {
      type: Sequelize.STRING,
      allowNull: true
    },
    bathroom: {
      type: Sequelize.STRING,
      allowNull: true
    },
    balcony: {
      type: Sequelize.STRING,
      allowNull: true
    },
    site: {
      type: Sequelize.STRING,
      allowNull: true
    },
    link: {
      type: Sequelize.STRING,
      allowNull: true
    },
    time_call: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    parking: {
      type: Sequelize.STRING,
      allowNull: true
    },
    roof: {
      type: Sequelize.STRING,
      allowNull: true
    }, 
    existence: {
      type: Sequelize.STRING,
      allowNull: true
    },
    coordinates: 
    {
      type: Sequelize.STRING,
      get: function() 
      {
        return JSON.parse(this.getDataValue('coordinates'));
      }, 
      set: function(val) 
      {
        return this.setDataValue('coordinates', JSON.stringify(val));
      },
      allowNull: true
    },
    date_created: 
    {
      type: Sequelize.DATE,
      allowNull: true
    },
    date_updated: 
    {
      type: Sequelize.DATE,
      allowNull: true
    }
  },
  );
  
  Kufar.sync({force: false})

  module.exports = Kufar;

