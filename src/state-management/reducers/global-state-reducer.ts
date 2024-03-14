import {
    SET_THEME,
    SET_ISLOGIN,
    SET_REMEMBER_ME,
    SET_PERSIST_USERNAME_AND_PASSWORD,
    SET_USER_DATA
} from '../actions/global-state-actions';

const initialState = {
    userData: [],
    isLogined: false,
    themeMode: 'light',
    rememberMe: false,
    persistLoginScreen: [
        {
            username: null,
            password: null
        }
    ]
};

export const globalStateReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: action.payload };

        case SET_ISLOGIN:
            return { ...state, isLogined: action.payload };

        case SET_THEME:
            return { ...state, themeMode: action.payload };

        case SET_REMEMBER_ME:
            return { ...state, rememberMe: action.payload };

        case SET_PERSIST_USERNAME_AND_PASSWORD:
            return { ...state, persistLoginScreen: action.payload };
        default:
            return state;
    }
};
