'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activitie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activitie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content:  {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    deletedAt: {
      type: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'Activitie',
    paranoid:true,
    timestamps: true
  });
  return Activitie;
};