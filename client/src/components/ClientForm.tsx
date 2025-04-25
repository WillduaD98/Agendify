import React, {useState} from 'react';
import api from '../services/api'

interface ClientFormProps {
    onSuccess: () => Promise<void>;
}

const ClientForm: React.FC<ClientFormProps> = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //Submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post('/clients', {
                name,
                phoneNumber: Number(phoneNumber)
            });

            setSuccessMessage('Cliente Creado correctamente');
            setErrorMessage('');
            setName('');
            setPhoneNumber('');
            await onSuccess();
            console.log('Cliente creado', response.data)

        } catch (error) {
            console.error(`Error al crear cliente:`, error)
            setErrorMessage('Hubo un error al crear el cliente');
            setSuccessMessage('');
        }

    }

    return(
        <div>
            <h2>Crear nuevo cliente</h2>
            <form onSubmit={handleSubmit}>
                {/* Name input */}
                <div>
                    <label>Client name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Ex: Juan Perez' required/>
                </div>

                {/*Phone Number input*/}
                <div>
                    <label>Client Phone Number:</label>
                    <input type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Ex: 4771234567' required/>
                </div>

                <button type='submit'>Save Client</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style = {{color: 'red'}}>{errorMessage}</p>}
        </div>
    )
};

export default ClientForm;