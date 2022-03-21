'use strict';
const { Model } = require('sequelize');
module.exports = (Sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Member.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    facebookUrl: {
      allowNull: true,
      type: Sequelize.STRING
    },
    instagramUrl: {
      allowNull: true,
      type: Sequelize.STRING
    },
    linkedinUrl: {
      allowNull: true,
      type: Sequelize.STRING
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    deletedAt: {
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Member',
    paranoid: true
  });
  return Role;
};