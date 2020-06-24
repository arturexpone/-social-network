import {Constance} from './constance';
import {toastr} from 'react-redux-toastr';


// Events ac
export const createEvent = (payload) => ({type: Constance.CREATE_EVENT, payload});
export const updateEvent = (payload) => {
  toastr.success('Success!', 'Event has been updated!');
  return {type: Constance.UPDATE_EVENT, payload}
};
export const deleteEvent = (payload) => ({type: Constance.DELETE_EVENT, payload});


// Modals ac
export const openModal = (modalType, modalProps) => ({
  type: Constance.MODAL_OPEN,
  payload: {
    modalType,
    modalProps
  }});
export const closeModal = () => ({type: Constance.MODAL_CLOSE});

// Auth ac
export const login = (creds) => ({
  type: Constance.LOGIN_USER,
  payload: {
    creds
  }});
export const logout = () => ({type: Constance.SIGN_OUT_USER});