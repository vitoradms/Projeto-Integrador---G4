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
      // define association here
    }
  }
  Lista_receitas.init({
    nome: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Lista_receitas',
    tableName: 'lista_receitas',
    freezeTableName: true
  });
  return Lista_receitas;
};