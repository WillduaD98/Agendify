// import React from 'react'
import React, {useState, useEffect} from 'react';
import ClientForm from '../components/ClientForm.js'
import ClientList from '../components/ClientList.js';
import api from '../services/api.js';

const ViewCreateClient = () => {
    const [clients, setClients] = useState([]);

    const fetchClients = async () => {
        try {
            const res = await api.get('/clients');
            setClients(res.data)
        } catch (error) {
            console.error('Error chargin clients: ', error)
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);



    return (
        <div>
            <h1>My Clients</h1>
            <ClientForm  onSuccess={fetchClients}/>
            <ClientList clients={clients}/>
        </div>
    )
}
export default ViewCreateClient