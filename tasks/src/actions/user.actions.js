import axios from 'axios';
import { userService } from '../services';

export const userActions = {
    login,

};

function login(phone, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password })
    };
    return dispatch => {
        return axios.post('https://kazi.azurewebsites.net/personnel/login',requestOptions);
    }

}

