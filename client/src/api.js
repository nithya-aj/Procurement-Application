import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getSuppliers = () => axios.get(`${API_URL}/supplier/all`);
export const getActiveSuppliers = () => axios.get(`${API_URL}/supplier/active`);
export const createSupplier = (data) => axios.post(`${API_URL}/supplier/create`, data);
export const updateSupplier = (id, data) => axios.put(`${API_URL}/supplier/${id}`, data);
export const deleteSupplier = (id) => axios.delete(`${API_URL}/supplier/${id}`);

export const getItems = () => axios.get(`${API_URL}/items/all`);
export const getItem = (itemNo) => axios.get(`${API_URL}/items/${itemNo}`);
export const createItem = async (formData) => {
    return axios.post(`${API_URL}/items/create`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateItem = (id, data) => axios.put(`${API_URL}/items/${id}`, data);
export const deleteItem = (id) => axios.delete(`${API_URL}/items/${id}`);

export const createPurchaseOrder = (data) => axios.post(`${API_URL}/purchase/purchase-orders`, data);
