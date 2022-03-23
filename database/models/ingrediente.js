'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingrediente.belongsToMany(models.Receita, {
        through: 'Receita_ingrediente',
        as: 'ingredientes_da_receita',
        foreignKey: 'ingredientes_id'
      })
    }
  }
  Ingrediente.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingrediente',
    tableName: 'ingredientes',
    freezeTableName: true
  });
  return Ingrediente;
};