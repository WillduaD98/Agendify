import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} from '../../../controllers/appointment.controller';

const router = express.Router();

router.post('/', createAppointment);        // Crear cita
router.get('/', getAppointments);           // Listar todas las citas
router.get('/:id', getAppointmentById);     // Obtener cita específica
router.put('/:id', updateAppointment);      // Editar cita
router.delete('/:id', deleteAppointment);   // Eliminar cita

export {router as appointmentRouter };

// Este archivo define las rutas para manejar las citas en la aplicación.
// estas rutas se van a montar en el servidor principal (server.ts)