export const SET_THEME= 'SET_THEME';
export const SET_ISLOGIN = 'SET_ISLOGIN';
export const SET_REMEMBER_ME = 'SET_REMEMBER_MEE';
export const SET_PERSIST_USERNAME_AND_PASSWORD = 'SET_PERSIST_USERNAME_AND_PASSWORD';
export const SET_USER_DATA = 'SET_USER_DATA';

export type userType = {
    uid?: number | null,
    name?: string | null,
    partner_id?: number | null,
    password?: string | null,
};

type userPrsist = {
    username: string;
    password: string;
}

interface SetThemeAction {
    type: typeof SET_THEME,
    payload: string
}
interface SetIsLoginAction {
    type: typeof SET_ISLOGIN;
    payload: boolean;
}

interface SetRememberMeAction {
    type: typeof SET_REMEMBER_ME;
    payload: boolean;
}

interface SetPersistUsernameAndPasswordAction {
    type: typeof SET_PERSIST_USERNAME_AND_PASSWORD;
    payload: { username: string | null; password: string | null }[];
}

interface SetUserDataAction {
    type: typeof SET_USER_DATA;
    payload: userType;
}

export type GlobalStateActionTypes =
| SetThemeAction
| SetIsLoginAction
| SetRememberMeAction
| SetPersistUsernameAndPasswordAction
| SetUserDataAction;


export const setTheme = (theme:string) => ({
    type: SET_THEME,
    payload: theme,
});

export const isLogin = (data: boolean) => ({
    type: SET_ISLOGIN,
    payload: data,
});

export const setRememberMe = (data:boolean) => ({
    type: SET_REMEMBER_ME,
    payload: data,
});

export const setPersistLoginScreenData = (data:userPrsist) => ({
    type: SET_PERSIST_USERNAME_AND_PASSWORD,
    payload: data,
});

export const setUserData = (data: userType) => ({
    type: SET_USER_DATA,
    payload: data,
});
