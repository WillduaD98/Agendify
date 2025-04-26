import { Client } from '../models/client.model.js';

export const seedClients = async () => {
  await Client.bulkCreate([
    { name: 'Justin', phoneNumber: 5543267891, assignedUserId: 1 },
    { name: 'Sergio', phoneNumber: 47743267893, assignedUserId: 1 },
    { name: 'Andres', phoneNumber: 5843267892, assignedUserId: 1 },
    { name: 'user2', phoneNumber: 5843267892, assignedUserId: 2 },

  ], { individualHooks: true });
};
