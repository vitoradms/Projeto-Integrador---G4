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
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto_receita: {
        type: Sequelize.STRING
      },
      modo_preparo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tempo_preparo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rendimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avalicao: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      usuarios_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios', 
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Receitas');
  }
};