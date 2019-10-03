import axios from 'axios';
import config from '../config/config';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';



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
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken',accessToken);
        setAuthorizationToken(accessToken);
        //for debugging delete before production
        console.log(jwt.decode(accessToken));
        
       return response;
    }).catch((err)=>{
       console.log(err);
    })
}

