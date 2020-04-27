import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState =  {
    users: [],
    totalUsersCount: 22,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
;

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
                }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
                }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
                }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing ?
                    [...state.followingInProgress, action.id]  :
                    state.followingInProgress.filter(id => id != action.id)
                }
        default:
            return state;
    }
}


export const followSuccsess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setLoader = (value) => ({type: TOGGLE_IS_FETCHING, isFetching: value});
export const toggleFollowingProgress = (isFollowing, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, id});


export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setLoader(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setLoader(false));
        dispatch(setUsers(data.items));
    })};

export const followThunkCreator = (id, unfollowOrFollow = 'unfollow') => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    let api = unfollowOrFollow === 'follow' ? usersAPI.followAPI : usersAPI.unfollowAPI;
    api(id).then(resultCode => {
        if (resultCode === 0) {
            let followOrUnfollow = unfollowOrFollow === 'follow' ? followSuccsess(id) : unfollowSuccess(id);
            dispatch(followOrUnfollow);
            dispatch(toggleFollowingProgress(false, id));
        }
    })};


export default usersReducer;