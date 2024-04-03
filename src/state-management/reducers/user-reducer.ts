import { USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_FAILURE } from '../actions/user-actions';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const userDataReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
