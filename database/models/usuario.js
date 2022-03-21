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
      // define association here
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    avatar: DataTypes.STRING,
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: DataTypes.BOOLEAN(0)
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    freezeTableName: true,
  });
  return Usuario;
};