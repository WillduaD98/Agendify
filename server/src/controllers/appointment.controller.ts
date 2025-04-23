import { Request, Response } from 'express';
import db from '../src/models';

const Appointment = db.Appointment;
// funciones para manejar las citas y conectarse a la base de datos
// controlan el CRUD de las citas
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la cita', error });
  }
};

export const getAppointments = async (_req: Request, res: Response) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener citas', error });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Cita no encontrada' });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar cita', error });
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Cita no encontrada' });

    await appointment.update(req.body);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cita', error });
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Cita no encontrada' });

    await appointment.destroy();
    res.status(200).json({ message: 'Cita eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar cita', error });
  }
};
