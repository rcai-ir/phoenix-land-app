import { combineReducers } from 'redux';
import { loginReducer } from './auth-reducer';
import { userDataReducer } from './user-reducer';
import { globalStateReducer } from './global-state-reducer';

export const rootReducer = combineReducers({
    login: loginReducer,
    userData: userDataReducer,
    globalState: globalStateReducer,
});
