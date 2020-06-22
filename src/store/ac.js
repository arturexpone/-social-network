import {Constance} from './constance';

export const createEvent = (payload) => ({type: Constance.CREATE_EVENT, payload});
export const updateEvent = (payload) => ({type: Constance.UPDATE_EVENT, payload});
export const deleteEvent = (payload) => ({type: Constance.DELETE_EVENT, payload});

export const openModal = (modalType, modalProps) => ({
  type: Constance.MODAL_OPEN,
  payload: {
    modalType,
    modalProps
  }});
export const closeModal = () => ({type: Constance.MODAL_CLOSE});