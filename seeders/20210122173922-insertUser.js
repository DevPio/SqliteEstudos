'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
