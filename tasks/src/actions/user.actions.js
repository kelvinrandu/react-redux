import axios from 'axios';
export const userActions = {
    login,

};


export function login(data){
    return dispatch => {
        return axios.post('https://kazi.azurewebsites.net/personnel/login',data);
    }
}