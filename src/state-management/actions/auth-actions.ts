import { Dispatch } from 'redux';
import { Authenticated } from 'types';
import axiosInstance from '../base-url';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


interface SetLoginRequestAction {
    type: typeof LOGIN_REQUEST,
    payload: string
}
interface SetLoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: string;
}

interface SetLoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: string;
}

export type GlobalStateActionTypes =
| SetLoginRequestAction
| SetLoginSuccessAction
| SetLoginFailureAction

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (data: Authenticated) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

export const loginFailure = (error: string) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const userLogin = 
(credentials:Authenticated) => async (dispatch: Dispatch) => {
    dispatch(loginRequest());
    console.log(credentials)
    try {
        const response = await axiosInstance.post('/jsonrpc', {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                service: 'common',
                method: 'authenticate',
                args: [
                    credentials.db,
                    credentials.login,
                    credentials.password,
                    {},
                ],
            },
        });
        const responseData = response.data;
        const responseStatus = response.status;
        dispatch(loginSuccess(responseData));
        return { data: responseData, status: responseStatus };
    } catch (error) {
        if(typeof error ==="object" && error !== null && "message" in error){
            const errorMsg = (error as Error).message; 
            dispatch(loginFailure(errorMsg));
            throw error;
        } else {
            throw new Error('Unknown error occurred');
        }
    }
};
