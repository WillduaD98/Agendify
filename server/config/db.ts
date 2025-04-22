import {Sequalize } from 'sequalize';
import dotenv from 'dotenv';

dotenv.config();

let sequalize: Sequalize;

if (process.env.DATABASE_URL) {
    //Configuration for Render or any other supplier with complete URL
    sequalize = new Sequalize (process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnaithorized: false, // Only in case Render need this
            }
        },
        logging: false,
    });
}else {
    sequalize = newSequalize(
        process.env.DB_NAME || '',
        process.env.DB_USER || '',
        process.env.DB_PASSWORD || '',
        {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            logging: false,
        }
    );

}

export default sequalize;