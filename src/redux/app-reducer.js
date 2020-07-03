import {authAPI} from "../api/api";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(getAuthUserData())])
        .then(() => {dispatch(initializedSuccess())})
    // dispatch(getAuthUserData());
    // dispatch(initializedSuccess());
};
