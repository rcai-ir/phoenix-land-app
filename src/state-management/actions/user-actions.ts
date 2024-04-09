import { Dispatch, AnyAction } from 'redux';
import { Authenticated } from 'types';
import axiosInstance from '../base-url';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAILURE = 'USER_DATA_FAILURE';

interface DataRequestAction {
    type: typeof USER_DATA_REQUEST,
    payload: string
}
interface DataSuccessAction {
    type: typeof USER_DATA_SUCCESS;
    payload: string;
}

interface DataFailureAction {
    type: typeof USER_DATA_FAILURE;
    payload: string;
}

interface ResultItem {
    id: number;
    partner_id: [number, string]; 
    name: string;
}

interface UserDataProps {
    data: {
        jsonrpc:string;
        id: string | number | null;
        result: ResultItem[]
    };
    status:number
}

export type GlobalStateActionTypes =
| DataRequestAction
| DataSuccessAction
| DataFailureAction

export const dataRequest = () => ({
    type: USER_DATA_REQUEST,
});

export const dataSuccess = (data:string) => ({
    type: USER_DATA_SUCCESS,
    payload: data,
});

export const dataFailure = (error:string) => ({
    type: USER_DATA_FAILURE,
    payload: error,
});



export const userGetById = (credentials:Authenticated) => async (dispatch:Dispatch<AnyAction>):Promise<UserDataProps> => {
    try {
        dispatch(dataRequest());
        const response = await axiosInstance.post('/jsonrpc', {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                service: 'object',
                method: 'execute_kw',
                args: [
                    credentials.db,
                    JSON.stringify(credentials.uid),
                    credentials.password,
                    'res.users',
                    'search_read',
                    [[['user_ids', '=', credentials.uid]]],
                    {
                        fields: ['name', 'partner_id'],
                    },
                ],
            },
        });
        const responseData = response.data;
        const responseStatus = response.status;
        dispatch(dataSuccess(responseData));
        return { data: responseData, status: responseStatus };
    } catch (error) {
        if(typeof error ==="object" && error !== null && "message" in error){
            const errorMsg = (error as Error).message; 
            dispatch(dataFailure(errorMsg));
            throw error;
        } else {
            throw new Error('Unknown error occurred');
        }
    }
};
