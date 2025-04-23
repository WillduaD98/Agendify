import React from 'react';

interface Appointment {
  id: number;
  date: string;
  reason: string;
  clientId: number;
  professionalId: number;
}

interface Props {
  appointment: Appointment;
  onEdit: (appointment: Appointment) => void;
  onDelete: (id: number) => void;
}

const AppointmentCard: React.FC<Props> = ({ appointment, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-sm my-2 bg-white">
      <h3 className="font-bold">{new Date(appointment.date).toLocaleString()}</h3>
      <p>Motivo: {appointment.reason}</p>
      <p>Cliente ID: {appointment.clientId}</p>
      <p>Profesional ID: {appointment.professionalId}</p>

      <div className="mt-2">
        <button
          onClick={() => onEdit(appointment)}
          className="mr-2 bg-yellow-400 px-2 py-1 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(appointment.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
