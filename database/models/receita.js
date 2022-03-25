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
      Receita.belongsTo(models.Usuario, {
        as: 'usuario_receita',
        foreignKey: 'usuarios_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      });

      Receita.hasMany(models.Ingrediente, {
        as: 'ingredientes',
        foreignKey: 'receitas_id'
      })
    }
  }
  Receita.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foto_receita: DataTypes.STRING,
    modo_preparo: DataTypes.TEXT,
    tempo_preparo: DataTypes.STRING,
    rendimento: DataTypes.STRING,
    avalicao: DataTypes.INTEGER,
    usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Receita',
    tableName: 'receitas',
    freezeTableName: true
  });
  return Receita;
};