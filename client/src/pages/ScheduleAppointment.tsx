import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Appointment {
  id?: number;
  date: string;
  reason: string;
  clientId: number | '';
  professionalId: number | '';
}

interface Client {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
}

interface Props {
  appointmentToEdit?: Appointment;
}

const ScheduleAppointment: React.FC<Props> = ({ appointmentToEdit }) => {
  const [form, setForm] = useState<Appointment>({
    date: '',
    reason: '',
    clientId: '',
    professionalId: '',
  });

  const [clients, setClients] = useState<Client[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (appointmentToEdit) {
      setForm(appointmentToEdit);
    }
  }, [appointmentToEdit]);

  useEffect(() => {
    const fetchData = async () => {
      const clientsRes = await axios.get<Client[]>('/api/clients');
      const usersRes = await axios.get<User[]>('/api/users');
      setClients(clientsRes.data);
      setUsers(usersRes.data);
    };
    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'clientId' || name === 'professionalId' ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (appointmentToEdit?.id) {
        await axios.put(`/api/appointments/${appointmentToEdit.id}`, form);
        alert('Cita actualizada');
      } else {
        await axios.post('/api/appointments', form);
        alert('Cita creada');
      }
    } catch (err) {
      alert('Hubo un error');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label>
        Fecha y Hora:
        <input
          type="datetime-local"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Motivo:
        <input
          type="text"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Cliente:
        <select name="clientId" value={form.clientId} onChange={handleChange} required>
          <option value="">Seleccione</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Profesional:
        <select name="professionalId" value={form.professionalId} onChange={handleChange} required>
          <option value="">Seleccione</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {appointmentToEdit ? 'Actualizar' : 'Crear'} Cita
      </button>
    </form>
  );
};

export default ScheduleAppointment;
