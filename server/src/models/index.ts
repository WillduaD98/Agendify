// import Sequelize from 'sequelize';
// import userModel from './user.model';
// import clientModel from './client.model';
// import appointmentModel from './appointment.model';

// const sequelize = new Sequelize(process.env.DB_URI as string);

// const db: any = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// // Models
// db.User = userModel(sequelize, Sequelize.DataTypes);
// db.Client = clientModel(sequelize, Sequelize.DataTypes);
// db.Appointment = appointmentModel(sequelize, Sequelize.DataTypes);

// // Relationships
// db.Appointment.belongsTo(db.Client, { foreignKey: 'clientId' });
// db.Client.hasMany(db.Appointment, { foreignKey: 'clientId' });

// db.Appointment.belongsTo(db.User, { foreignKey: 'professionalId' });
// db.User.hasMany(db.Appointment, { foreignKey: 'professionalId' });

// export default db;

import sequalize from "../config/db";

import { User } from './user.model';
import { Client } from './client.model';
import { Appointment } from './appointment.model';




// *** MODIFIY Relationships *** //
//Relationships
User.hasMany(Appointment, { foreignKey: 'userId'});
Appointment.belongsTo(User, {foreignKey: 'userId'});



// Relaciones
User.hasMany(Appointment, { foreignKey: 'userId' });
Appointment.belongsTo(User, { foreignKey: 'userId' });

Client.hasMany(Appointment, { foreignKey: 'clientId' });
Appointment.belongsTo(Client, { foreignKey: 'clientId' });

export {
  sequalize,
  User,
  Client,
  Appointment
};

