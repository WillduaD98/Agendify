
import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import { Client } from '../models/client.model.js';

interface AppointmentAttributes { 
  id: number;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  clientId?: number;

}

interface AppoinmentCreationAttributes extends Optional<AppointmentAttributes, 'id'>{}

export class Appointment extends Model<AppointmentAttributes, AppoinmentCreationAttributes> implements AppointmentAttributes{
  public id!: number;
  public date!: Date;
  public status!: 'pending' | 'confirmed' | 'cancelled';
  public clientId?: number;

  public readonly client?: Client

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}



export function AppointmentFactory (sequelize: Sequelize): typeof Appointment {
  Appointment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id'
        }
      }
    },
    {
      tableName: 'appointments',
      sequelize,
    }
  );
  return Appointment;
};
