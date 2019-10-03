import { userService } from '../services';
import { SET_CURRENT_USER } from '../constants';



export const userActions = {
    login

};


function login(phone, password) {
    return dispatch => {
      

       return userService.post(phone, password)
            .then((response)=>{  
               console.log(response)
            });
            
    };

}

export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
