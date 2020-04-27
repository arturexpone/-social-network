import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data});

export const getAuthUserData = () => (dispatch) => {
    usersAPI.getAuthUserData.then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data));
            }
        })
};