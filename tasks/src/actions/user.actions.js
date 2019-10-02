import { userService } from '../services';
import { history } from '../helpers';
import { alertActions } from './';

export const userActions = {
    login

};


function login(phone, password) {
    return dispatch => {

        userService.post(phone, password)
            .then(
                
                user => { 
                    // dispatch(success(user));
                    
                    history.push('/');
                },
                error => {
                    // dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    // function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}



