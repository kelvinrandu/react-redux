import axios from 'axios';
import config from '../config/config';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';



export const userService = {
    post,
    getTasks,

};

function getTasks(accessToken){

    let apiEndpoint = '/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC';
    
    return axios.get(config.baseUrl+apiEndpoint, { headers: { Authorization : `Bearer ${accessToken}`} }).then((response)=>{
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



// axios.post(TOKEN_URL, Querystring.stringify(data))
// .then(response => {
//   console.log(response.data);
//   USER_TOKEN = response.data.access_token;
//   console.log('userresponse ' + response.data.access_token);
// })
// .catch((error) => {
//   console.log('error ' + error);
// });
// const AuthStr = 'Bearer '.concat(USER_TOKEN);
// axios.get(URL, { headers: { Authorization: AuthStr } }).then(response => {
//       // If request is good...
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log('error 3 ' + error);
//     });