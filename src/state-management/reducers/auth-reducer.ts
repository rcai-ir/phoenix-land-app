import {
<<<<<<< HEAD
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/auth-actions';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const loginReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
=======
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/auth-actions';

const initialState = {
    loading: false,
    data: [],
    error: ''
};

export const loginReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
>>>>>>> b250076a476487b39b736554ae7b95bcbf660f21
};
