import axios from 'axios';

const API_URL = 'http://localhost:23077/api/requests';

export const getAllGroupedRequests = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching requests:', error);
        return [];
    }
};

export const updateRequestStatus = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}`, { id, status });
        return response.data;
    } catch (error) {
        console.error('Error updating request status:', error);
        return null;
    }
};