export const SET_THEME = 'SET_THEME';
export const SET_ISLOGIN = 'SET_ISLOGIN';
export const SET_REMEMBER_ME = 'SET_REMEMBER_MEE';
export const SET_PERSIST_USERNAME_AND_PASSWORD = 'SET_PERSIST_USERNAME_AND_PASSWORD';
export const SET_USER_DATA = 'SET_USER_DATA';

type userType = {
  uid: number,
  name: string,
  partner_id: number,
  passwore: string,
};

export const setTheme = (theme:any) => ({
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

export const setPersistLoginScreenData = (data:any) => ({
  type: SET_PERSIST_USERNAME_AND_PASSWORD,
  payload: data,
});

export const setUserData = (data: userType) => ({
  type: SET_USER_DATA,
  payload: data,
});
