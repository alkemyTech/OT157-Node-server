'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Role.init({
    //Borrado ID
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    //Modificado Type de createdAt y deletedAt
    createdAt: {
      type: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    updatedAt: {
      type: {
        type: DataTypes.DATE,
        allowNull: true
      }
    } 
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};