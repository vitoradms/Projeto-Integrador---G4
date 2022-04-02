'use strict';

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
     await queryInterface.bulkInsert('Lista_receitas', [{
      nome: 'diversos',
      createdAt: new Date(),
      updatedAt: new Date(),
      //receitas: [{nome: 'risoto'}, {nome: 'brigadeiro'}, {nome: 'cha de ortela'}]
    }], {
      include: ['receitas']
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
