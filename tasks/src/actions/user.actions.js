import { userService } from '../services';
import { SET_CURRENT_USER } from '../constants';




export const userActions = {
    login,
    getTasks,
    logout

};

function login(phone, password) {
    return dispatch => {

       return userService.post(phone, password)
            .then((response)=>{  
               console.log(response)
               dispatch(setCurrentUser(response));
            });
            
    };

}


function getTasks() {

    return userService.getTasks();

}
function logout() {
    return dispatch => {
 // logout function lies here           
    };

}

export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
