import {Constance} from './constance';

export const createEvent = (payload) => ({type: Constance.CREATE_EVENT, payload});
export const updateEvent = (payload) => ({type: Constance.UPDATE_EVENT, payload});
export const deleteEvent = (payload) => ({type: Constance.DELETE_EVENT, payload});