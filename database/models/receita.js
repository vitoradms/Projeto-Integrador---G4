'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Receita.init({
    nome: DataTypes.STRING,
    foto_receita: DataTypes.STRING,
    modo_preparo: DataTypes.TEXT,
    tempo_preparo: DataTypes.STRING,
    rendimento: DataTypes.STRING,
    usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Receita',
    tableName: 'receitas',
    freezeTableName: true
  });
  return Receita;
};