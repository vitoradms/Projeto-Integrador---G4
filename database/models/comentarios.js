'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comentarios.belongsTo(models.Receita, {
        as: 'receita_comentario',
        foreignKey: 'receita_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO-ACTION'
      }),
      Comentarios.belongsTo(models.Usuario, {
        as: 'usuario_comentario',
        foreignKey: 'usuario_id',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION'
      })
    }
  }
  Comentarios.init({
    comentario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    } ,
    receita_id: {
      type:  DataTypes.INTEGER,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comentarios',
  });
  return Comentarios;
};