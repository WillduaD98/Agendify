import React, { useState, useEffect } from 'react';
import { getClients } from '../services/clientService';
import api from '../services/api';

interface AppointmentFormProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  onSuccess: (date: string) => Promise<void>
}
interface Client {
  id: number;
  name: string
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSuccess, setSelectedDate, selectedDate }) => {
  const [date, setDate] = useState('')
  const [reason, setReason] = useState('')
  const [status, setStatus] = useState('')
  const [clientId, setClientId] = useState('')
  const [clients, setClient] = useState<Client[]>([])

  const [succesMessage, setSuccesMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await getClients();
        setClient(data)  
      } catch (error) {
        console.error(`Error al cargar clientes: `, error)
      }
      
    };
    loadClients();
  }, [])



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/appointments', {
        date: selectedDate, 
        reason,
        status,
        clientId: Number(clientId),
      });

      setSuccesMessage('Cita Creada Correctamente');
      setErrorMessage('')
      setSuccesMessage('Cita Creada Correctamente')
      setDate('')
      setReason('')
      setStatus('')
      // setClient([])

      await onSuccess(selectedDate);
      console.log('Appointment Creado', response.data)
    } catch (error) {
      console.error(`Error al crear Appointment`, error)
      setErrorMessage('Hubo un error al crear la cita')
      setSuccesMessage('')
    }
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>
          Date:
          <input
            type="datetime-local"
            name="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </label>

        <label>
          Reason:
          <input type="text" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} required />
        </label>

        <label>
          Cliente:
          <select name="clientId" value={clientId} onChange={(e) => setClientId(e.target.value)} required>
            <option value="">Seleccione</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}

          </select>
        </label>

        <label>
          Status:
          <select name="Status" value={status} onChange={(e) => setStatus(e.target.value)} >
            <option value=''>Seleccione</option>
            <option value='pending'>pending</option>
            <option value='pending'>confirmed</option>
            <option value='pending'>cancelled</option>

            
          </select>
        </label>

        <button type='submit'>Save Appointment</button>
          
        
      </form>
      {succesMessage && <p style={{ color: 'green' }}>{succesMessage}</p>}
      {errorMessage && <p style = {{color: 'red'}}>{errorMessage}</p>}    </div>
    )
};
    
export default AppointmentForm;
      