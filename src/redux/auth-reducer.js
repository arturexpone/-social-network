import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CAPTCHA = 'SET-CAPTCHA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    isCaptcha: false,
    urlCaptcha: '#'
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            };
        case SET_CAPTCHA:
            return {
                ...state,
                isCaptcha: action.isCaptcha,
                urlCaptcha: action.urlCaptcha
            };
        default:
            return state;
    }
}

export const setAuthUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, payload: {email, id, login}, isAuth});
export const setCaptcha = (isCaptcha, urlCaptcha) => ({type: SET_CAPTCHA, isCaptcha, urlCaptcha});

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.email, data.data.id, data.data.login, true));
            }
        })
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
                dispatch(setCaptcha(false))
            } else if (data.resultCode === 10) {
                authAPI.captcha().then(response => {
                    debugger
                    dispatch(setCaptcha(true, response.data.url))

                })

            }
        })
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {

            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
};