'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Receita, {
        as: 'pizza_usuario',
        foreignKey: 'usuarios_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      })
    }
  }
  Usuario.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_nascimento: DataTypes.DATE,
    avatar: DataTypes.STRING,
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    freezeTableName: true
  });
  return Usuario;
};