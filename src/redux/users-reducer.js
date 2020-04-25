const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState =  {
    users: [],
    totalUsersCount: 22,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
}
;

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, subscribe: true}
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, subscribe: false}
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
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = (value) => ({type: TOGGLE_IS_FETCHING, isFetching: value});

export default usersReducer;