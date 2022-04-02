'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listas_de_receitas_has_receitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listas_de_receitas_has_receitas.belongsTo(models.Lista_receitas, {
        foreignKey: 'receitas_id',
        onDelete: 'NO ACTION',
        //as: 'listas',
      });
      listas_de_receitas_has_receitas.belongsTo(models.Receita, {
        foreignKey: 'listas_receitas_id',
        onDelete: 'RESTRICT',
        //as: 'receitas',
      });
    }
  }
  listas_de_receitas_has_receitas.init({
    listas_de_receitas_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    receitas_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'listas_de_receitas_has_receitas',
    tableName: 'listas_de_receitas_has_receitas',
    freezeTableName: true,
    timestamps: false
  });
  return listas_de_receitas_has_receitas;
};