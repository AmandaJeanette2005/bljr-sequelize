'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const timestamps = {
      createdAt:new Date(),
      updatedAt:new Date()
    }

    await queryInterface.bulkInsert('categories', [
      { name: 'FASHION', ...timestamps},
      { name: 'BEAUTY', ...timestamps},
      { name: 'LIFE STYLE', ...timestamps},
      ], {});

    await queryInterface.bulkInsert('products', [
      { 
        category_Id: 1,
        name: 'bag',
        price: 35000,
        model: 'Gucci',
        size: 'small',
        color: 'white',
          ...timestamps
      }
        
      ], {});

    await queryInterface.bulkInsert('users', [
      {
        name: 'jeje',
        username: 'jeje2005',
        password: '12345',
        ...timestamps
      }
    ])
  },



  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.bulkDelete('users', null, {});


  }
};
