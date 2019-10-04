import axios from 'axios';
import config from '../config/config';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import  { GetAccessToken } from '../helpers/auth-header';



export const userService = {
    post,
    getTasks,

};

function getTasks(){
    const accessToken = GetAccessToken();

    let apiEndpoint = '/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC';
    
    return axios.get(config.baseUrl+apiEndpoint, { headers: { Authorization : `Bearer ${accessToken}`} }).then((response)=>{
       return response.data.tasks;
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
        //assign variable to accessToken     
        const accessToken = response.data.accessToken;

        //store token to local storage
        localStorage.setItem('accessToken',accessToken);
        setAuthorizationToken(accessToken);

        //for debugging delete before production
        const decodedToken = (jwt.decode(accessToken));
        
       return decodedToken;
    }).catch((err)=>{
       console.log(err);
    })
}


