
import Sequelize from 'sequelize';
import userModel from './user.model';
import clientModel from './client.model';
import appointmentModel from './appointment.model';

const sequelize = new Sequelize(process.env.DB_URI as string);

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = userModel(sequelize, Sequelize.DataTypes);
db.Client = clientModel(sequelize, Sequelize.DataTypes);
db.Appointment = appointmentModel(sequelize, Sequelize.DataTypes);

// Relationships
db.Appointment.belongsTo(db.Client, { foreignKey: 'clientId' });
db.Client.hasMany(db.Appointment, { foreignKey: 'clientId' });

db.Appointment.belongsTo(db.User, { foreignKey: 'professionalId' });
db.User.hasMany(db.Appointment, { foreignKey: 'professionalId' });

export default db;

import sequalize from "../config/db";
import {Sequelize} from 'sequelize';

import UserModel from './user.model';
import ClientModel from './client.model';
import AppointmentModel from './appointment.model';

// Initilizing models
const User = UserModel(sequelize);
const Client = ClientModel(sequalize);
const Appointment = AppointmentModel(sequalize);

//Relationships
User.hasMany(Appointment, { foreignKey: 'userId'});
Appointment.belongsTo(User, {foreignKey: 'userId'});

Client.hasMany(AppointmentModel, {foreignKey: 'clientId'});
Appointment.belonsTo(Client, {foreignKey: 'clientId'});

//Sequelize and Models Exports

export {
    sequalize,
    User,
    Client,
    Appointment
};

