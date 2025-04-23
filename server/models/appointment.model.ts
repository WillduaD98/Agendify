
import { DataTypes, Model } from 'sequelize';
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

class Appointment extends Model {
  public id!: number;
  public date!: Date;
  public userId!: number;
  public clientId!: number;
}

// Appointment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     clientId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },{
//     tableName: 'appointments',
//     sequelize?,
//   // {
//   //   // sequelize,
//   //   modelName: 'Appointment',
//   //   tableName: 'appointments',
//   // }
//   }
// );

export { Appointment };

