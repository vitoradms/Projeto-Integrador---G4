'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receita_ingrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Receita_ingrediente.belongsTo(models.Receita, {
        as: 'receitas_para_ingrediente',
        foreignKey: 'receitas_id',
        onDelete: 'CASCADE'
      });

      Receita_ingrediente.belongsTo(models.Ingrediente, {
        as: 'ingrediente_para_receita',
        foreignKey: 'ingredientes_id',
        onDelete: 'RESTRIC'
      })
    }
  }
  Receita_ingrediente.init({
    receitas_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    ingredientes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Receita_ingrediente',
    tableName: 'Receita_has_ingredientes',
    freezeTableName: true,
    timestamps: false
  });
  return Receita_ingrediente;
};