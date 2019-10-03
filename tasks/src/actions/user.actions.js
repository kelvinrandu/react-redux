import { userService } from '../services';
import { history } from '../helpers';


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

