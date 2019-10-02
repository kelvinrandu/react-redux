import axios from 'axios';
import config from '../config/config';



export const userService = {
    post,
    get,

};

function get(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
       return response;
    }).catch((err)=>{
       console.log(err);
    })
}
function post(phone, password){
    let apiEndpoint = '/personnel/login';
    let body = {
        'phone': phone,
        'password': password
    }
    
    return axios.post(config.baseUrl+apiEndpoint, body).then((response)=>{
        console.log(response);
       return response;
    }).catch((err)=>{
       console.log(err);
    })
}

