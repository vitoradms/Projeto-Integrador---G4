'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listas_de_receitas_has_receitas', {
      listas_de_receitas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Lista_receitas', 
          key: 'id'
        }
      },
      receitas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Receitas', 
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('listas_de_receitas_has_receitas');
  }
};