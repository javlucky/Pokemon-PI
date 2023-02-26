const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    ataque: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    defensa: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    velocidad: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, { timestamps: false }
  );
};
