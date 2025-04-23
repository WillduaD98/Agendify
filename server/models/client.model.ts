import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Client extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
  }
);

export { Client };
