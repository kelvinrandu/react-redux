import { userService } from '../services';
import { history } from '../helpers';
import { SET_CURRENT_USER } from '../constants';


export const userActions = {
    login

};

function login(phone, password) {
    return dispatch => {
      

        userService.post(phone, password)
            .then(
                
                user => { 
                   // dispatch(success(user));
                    history.push('/home');
                },
                error => {
                    //dispatch(failure(error.toString()));
                    console.log(error);
                    
                }
            );
            
    };

}

export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
