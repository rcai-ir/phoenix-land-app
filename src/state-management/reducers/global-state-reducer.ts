import {
    SET_THEME,
    SET_ISLOGIN,
    SET_REMEMBER_ME,
    SET_PERSIST_USERNAME_AND_PASSWORD,
    SET_USER_DATA,
    userType, 
    GlobalStateActionTypes
} from '../actions/global-state-actions';


export interface GlobalState {
    userData: userType; 
    isLogined: boolean;
    themeMode: string; 
    rememberMe: boolean;
    persistLoginScreen: { username: string | null; password: string | null }[];
}

const initialState: GlobalState = {
    userData: {
        uid: null,
        name: null,
        partner_id: null,
        password: null,
    },
    isLogined: false,
    themeMode: 'light',
    rememberMe: false,
    persistLoginScreen: [
        {
            username: null,
            password: null,
        },
    ],
};

export const globalStateReducer = (state: GlobalState = initialState, action:GlobalStateActionTypes) => {
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
