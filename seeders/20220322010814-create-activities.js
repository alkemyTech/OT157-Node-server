'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
     
    await queryInterface.bulkInsert('Activities', [{
        name: 'actividad',
        content: 'Contenido asdsadasdasds',
        image: 'urlimagen',       
        createdAt: new Date,
        updatedAt: new Date
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Activities', null, {});
     
  }
};
