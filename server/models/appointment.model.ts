import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  const Appointment = sequelize.define('Appointment', {
    date: {
      type: DataTypes.DATE,
      allowNull: false, //  fecha obligatoria
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false, //  motivo obligatorio
    },
    clientId: { //hace referencia al usuario
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    professionalId: { //hace referencia al profesional (usuario)
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return Appointment;
};
