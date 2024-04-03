import { Dispatch, AnyAction } from 'redux';
<<<<<<< HEAD
import { Authenticated } from 'types';
import axiosInstance from '../base-url';
=======
import axiosInstance from '../base-url';
import { Authenticated } from 'types';
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAILURE = 'USER_DATA_FAILURE';

<<<<<<< HEAD
export const dataRequest = () => ({
  type: USER_DATA_REQUEST,
});

export const dataSuccess = (data:any) => ({
  type: USER_DATA_SUCCESS,
  payload: data,
});

export const dataFailure = (error:string) => ({
  type: USER_DATA_FAILURE,
  payload: error,
});

export const userGetById = (credentials:Authenticated) => async (dispatch:Dispatch<AnyAction>):Promise<{ data:any, status:number }> => {
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
  } catch (error:any) {
    const errorMsg = error.message;
    dispatch(dataFailure(errorMsg));
    throw error;
  }
};
=======
export const dataRequest = (): any => {
    return {
        type: USER_DATA_REQUEST
    };
};

export const dataSuccess = (data: any): any => {
    return {
        type: USER_DATA_SUCCESS,
        payload: data
    };
};

export const dataFailure = (error: string): any => {
    return {
        type: USER_DATA_FAILURE,
        payload: error
    };
};

export const userGetById = (credentials: Authenticated) => {
    return async (
        dispatch: Dispatch<AnyAction>
    ): Promise<{ data: any; status: number }> => {
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
                            fields: ['name', 'partner_id']
                        }
                    ]
                }
            });
            const responseData = response.data;
            const responseStatus = response.status;
            dispatch(dataSuccess(responseData));
            return { data: responseData, status: responseStatus };
        } catch (error: any) {
            const errorMsg = error.message;
            dispatch(dataFailure(errorMsg));
            throw error;
        }
    };
};
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21
