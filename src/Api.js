import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/api/";

export const getClients = async () => {
    try {
        const response = await axios.get(`${baseURL}clients/`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des clients :", error);
        throw error;
    }
};
export const getClientById = async (id) => {
    try {
        const response = await axios.get(`${baseURL}clients/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des détails du client :", error);
        throw error;
    }
};
export const getSimulations = async () => {
    try {
        const response = await axios.get(`${baseURL}simulations/`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des simulations :", error);
        throw error;
    }
};

export const getSimulById = async (id) => {
    try {
        const response = await axios.get(`${baseURL}simulations/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des détails du simulation :", error);
        throw error;
    }
};

export const addClient = async (client) => {
    try {
        console.log("Données envoyées:", client); 
        const response = await axios.post(`${baseURL}clients/`, client);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout du client :", error);
        throw error;
    }
};

export const editClient = async (id, client) => {
    try {
        const response = await axios.put(`${baseURL}clients/${id}/`, client);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la mise à jour du client :", error);
        throw error;
    }
};

export const deleteClient = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}clients/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la suppression du client :", error);
        throw error;
    }
};
