'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lista_receitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lista_receitas.belongsToMany(models.Receita, {
        through: 'listas_de_receitas_has_receitas',
        as: 'receitas',
        foreignKey: 'lista_receitas_id'
      })
    }
  }
  Lista_receitas.init({
    lista_receitas_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nome: DataTypes.STRING  
  }, {
    sequelize,
    modelName: 'Lista_receitas',
  });
  return Lista_receitas;
};