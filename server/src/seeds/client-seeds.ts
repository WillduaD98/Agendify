import { Client } from '../models/index.js';

export const seedClients = async () => {
  await Client.bulkCreate([
    { name: 'Ervey Garcia', phoneNumber: '528128615166', assignedUserId: 1 },
    { name: 'Gabriela', phoneNumber: '525543381002', assignedUserId: 1 },
    { name: 'Michelle Guzmán', phoneNumber: '525633860889', assignedUserId: 1 },
    { name: 'William Duarte', phoneNumber: '524777240326', assignedUserId: 1 },

  ], { individualHooks: true });
};
