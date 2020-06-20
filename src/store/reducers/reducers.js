import {Constance} from '../constance';

const initialState = {
  auth: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constance.CREATE_EVENT:
      return {...state};
    case Constance.UPDATE_EVENT:
      return {...state};
    case Constance.DELETE_EVENT:
      return {...state}
    default:
      return state
  }
}