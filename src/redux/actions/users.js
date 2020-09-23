import axios from 'axios';
import getHistory from '../../history'; 
import store from '../store';

import { SIGN_UP, LOGIN, LOGOUT } from '../types/users';


export const register = async (user) => {
    try {
        const res = await axios.post('http://localhost:3000/users/register', user);

        store.dispatch({
            type: SIGN_UP
        });

        return res;

    } catch (error) {
        console.error(error);
    }
}

export const login = async (credentials) => {
    try {
        const res = await axios.post('http://localhost:3000/users/login', credentials);

        store.dispatch({
            type: LOGIN,
            payload: res.data.user
        });

        localStorage.setItem('authToken', res.data.token);
        return res;

    } catch (error) {
        console.error(error)
    }
}

export const logout = async () => {
    try {
        const res = await axios.post('http://localhost:3000/users/logout');

        store.dispatch({
            type: LOGOUT
        });

        localStorage.removeItem('authToken');

        getHistory().push('/');
        
        return res;

    } catch (error) {
        console.error(error);
    }
}



