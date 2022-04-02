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
      Receita.hasMany(models.Ingrediente, {
        as: 'ingredientes',
        foreignKey: 'receitas_id',
        onDelete: 'CASCADE',
        hooks: true
      });

      Receita.belongsTo(models.Usuario, {
        as: 'usuario_receita',
        foreignKey: 'usuarios_id'
      });

      Receita.belongsToMany(models.Lista_receitas, {
        through: 'listas_de_receitas_has_receitas',
        as: 'listas',
        foreignKey: 'receitas_id'
      })
    }
  }
  Receita.init({
    receitas_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foto_receita: DataTypes.STRING,
    modo_preparo: DataTypes.TEXT,
    tempo_preparo: DataTypes.STRING,
    rendimento: DataTypes.STRING,
    avalicao: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Receita',
    tableName: 'Receitas',
    freezeTableName: true
  });
  return Receita;
};