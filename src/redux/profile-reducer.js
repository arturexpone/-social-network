import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.floor(Math.random() * 10 + 2),
                message: action.post,
                likesCount: 0
            };
            return {
                ...state, posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}


export const addPost = (post) => ({type: ADD_POST, post})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusProfile = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (id) => (dispatch) => {
    usersAPI.getProfile(id).then(data =>
        dispatch(setUserProfile(data)
    ))
};

export const getStatus = (id) => (dispatch) => {

    profileAPI.getStatus(id).then(data =>
        dispatch(setStatusProfile(data))
    )
};

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }
        }
    )
};

export default profileReducer;