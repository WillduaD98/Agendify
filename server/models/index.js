"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = exports.Client = exports.User = exports.sequelize = void 0;
const db_1 = require("../config/db");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return db_1.sequelize; } });
const user_model_1 = require("./user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.User; } });
const client_model_1 = require("./client.model");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_model_1.Client; } });
const appointment_model_1 = require("./appointment.model");
Object.defineProperty(exports, "Appointment", { enumerable: true, get: function () { return appointment_model_1.Appointment; } });
// Relaciones
user_model_1.User.hasMany(appointment_model_1.Appointment, { foreignKey: 'userId' });
appointment_model_1.Appointment.belongsTo(user_model_1.User, { foreignKey: 'userId' });
client_model_1.Client.hasMany(appointment_model_1.Appointment, { foreignKey: 'clientId' });
appointment_model_1.Appointment.belongsTo(client_model_1.Client, { foreignKey: 'clientId' });
