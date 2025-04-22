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
