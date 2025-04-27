import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { User } from './user.model.js'
// Should we import usermodel?

// Define the interface for the client Class
interface ClientAttributes {
    id: number;
    name: string;
    phoneNumber: number;
    assignedUserId?: number;
}

interface ClientCreationAttributes extends Optional<ClientAttributes, 'id'>{}

export class Client extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes{
    public id!: number;
    public name!: string;
    public phoneNumber!: number;
    public assignedUserId?: number;

    // associated User model
    public readonly assignedUser? : User;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function ClientFactory(sequelize: Sequelize): typeof Client {
    Client.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            assignedUserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        },
        {
            tableName: 'clients',
            sequelize,
        }
    );
    return Client;
}