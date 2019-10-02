import axios from 'axios';
import config from '../config/config';
import { authHeader } from '../helpers';

export const userService = {
    login

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


// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
              
//                 console.log('logged in')
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
 }