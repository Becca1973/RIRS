import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:23077/api/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
};

export const addUser = async (user) => {
    try {
        const response = await axios.post(API_URL, { user });
        return response.data;
    } catch (error) {
        console.error('Error adding item:', error);
        return null;
    }
};

export const login = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { user });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error('Error trying to login:', error);
        return null;
    }
};

export const fetchLoggedInUser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.log("No token found");
        return null;
    }

    const decodedToken = jwtDecode(token); 

    if (decodedToken) {
        return {
            id: decodedToken.id,
            name: decodedToken.name,
            lastName: decodedToken.lastName,
            email: decodedToken.email,
        };
    }

    console.log("Invalid token");
    return null;
};