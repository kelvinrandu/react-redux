import axios from 'axios';

export function login(data){
    return dispatch => {
        return axios.post('https://kazi.azurewebsites.net/personnel/login',data);
    }
}