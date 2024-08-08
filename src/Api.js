import axios from 'axios';
const url = "http://localhost:3000/clients";
export const addClient = async (client) => {
    return await axios.post(url, client);
   };
export const editClient = async (id, client) => {
    return await axios.put(`${url}/${id}`, client);
   };
export const deleteClient = async (id) => {
    return await axios.delete(`${url}/${id}`);
   };