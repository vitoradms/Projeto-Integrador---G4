'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Receitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      foto_receita: {
        type: Sequelize.STRING
      },
      modo_preparo: {
        type: Sequelize.TEXT
      },
      tempo_preparo: {
        type: Sequelize.STRING
      },
      rendimento: {
        type: Sequelize.STRING
      },
      usuarios_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Receitas');
  }
};