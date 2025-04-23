import { sequelize } from '../config/db';
import { User } from './user.model';
import { Client } from './client.model';
import { Appointment } from './appointment.model';



// Relaciones
User.hasMany(Appointment, { foreignKey: 'userId' });
Appointment.belongsTo(User, { foreignKey: 'userId' });

Client.hasMany(Appointment, { foreignKey: 'clientId' });
Appointment.belongsTo(Client, { foreignKey: 'clientId' });

export {
  sequelize,
  User,
  Client,
  Appointment
};
