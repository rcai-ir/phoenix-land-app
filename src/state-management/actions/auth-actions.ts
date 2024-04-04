import { Dispatch, AnyAction } from 'redux';
import { Authenticated } from 'types';

import axiosInstance from '../base-url';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (data: any) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

export const loginFailure = (error: string) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const userLogin = (credentials:Authenticated) => async (dispatch: Dispatch<AnyAction>):Promise<{ data: any; status: number }> => {
    dispatch(loginRequest());
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
    } catch (error:any) {
        const errorMsg = error.message;
        dispatch(loginFailure(errorMsg));
        throw error;
    }
};
