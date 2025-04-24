import { Request, Response } from 'express';
import { Client, Appointment } from '../models/index.js';
import { Op } from 'sequelize';

// import { User } from '../models/user.model';

// funciones para manejar las citas y conectarse a la base de datos
// controlan el CRUD de las citas

//CREAT UN APPOINTMENT por POST
export const createAppointment = async (req: Request, res: Response) => {
  const {date, clientId, status} = req.body;
  try {
    // Checked if client exist:
    const client = await Client.findByPk(clientId);
    if (!client) {
      return res.status(404).json({message: 'Client not found'});
    }

    const newAppointment = await Appointment.create({
      date, 
      clientId, 
      status: status || 'pending'
    });
    return res.status(201).json(newAppointment);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la cita', error });
  }
};

//Obtener todos los Appointments con GET por fecha
export const getAppointmentsByDateAndUser = async (req: Request, res: Response) => {
  const { userId, date } = req.params
  if (!userId || !date) {
    return res.status(400).json({message: `user Id and Date are required. `})
  }
  try {
    const start= new Date(date as string);
    const end = new Date(date as string);
    end.setHours(23, 59, 59, 999);

    const appointments = await Appointment.findAll({
      where: {
        date: {
          [Op.between]: [start, end]
        }
      },
      include: [
        {
          model: Client,
          as: 'client',
          where: {
            assignedUserId: userId
          },
          attributes: ['id', 'name']
        }
      ],
      order: [['date', 'ASC']]
    })
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener citas', error });
  }
};
//Find Appointment by ID  - GET
export const getAppointmentById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const appointment = await Appointment.findByPk(id, {
      include: [
        {
          model: Client,
          as: 'client',
          attributes: ['name']
        }
      ]
    });
    if (!appointment) return res.status(404).json({ message: 'Cita no encontrada' });
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({ message: 'Error al buscar cita', error });
  }
};

//Actualizar Appointment PUT

export const updateAppointment = async (req: Request, res: Response) => {
  const { id } = req.params
  const {date, status} = req.body
  try {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }

    if (date) appointment.date = date
    if (status) appointment.status = status;
    
    await appointment.save();
    return res.status(200).json(`Appointment updated ${appointment}`);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar cita', error });
  }
};

//Deletear Appointment DELETE
export const deleteAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) return res.status(404).json({ message: 'Cita no encontrada' });

    await appointment.destroy();
    return res.status(200).json({ message: 'Cita eliminada correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar cita', error });
  }
};
