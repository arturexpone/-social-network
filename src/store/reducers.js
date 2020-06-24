import {Constance} from './constance';

const eventReducerInitialState = [];
const authInitialState = {
  authenticated: false,
  currentUser: 'vasya'
};

export const eventReducer = (state = eventReducerInitialState, action) => {
  switch (action.type) {
    case Constance.CREATE_EVENT:
      return [...state, action.payload];
    case Constance.UPDATE_EVENT: {
      return state.map(e => e.id === action.payload.id ? {...e, ...action.payload} : e);
    }
    case Constance.DELETE_EVENT:
      return state.filter(e => e.id !== action.payload)
    default:
      return state
  }
};

export const modalReducer = (state = null, action) => {
  switch (action.type) {
    case Constance.MODAL_OPEN:
      return {...action.payload};
    case Constance.MODAL_CLOSE: {
      return null;
    }
    default:
      return state
  }
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case Constance.LOGIN_USER:
      return {
        authenticated: true,
        currentUser: action.payload.creds.email
      };
    case Constance.SIGN_OUT_USER: {
      return {
        authenticated: false,
        currentUser: null
      }
    }
    default:
      return state
  }
};