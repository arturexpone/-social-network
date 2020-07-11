import {Constance} from './constance';
import {toastr} from 'react-redux-toastr';
import 'firebase/auth';
import {SubmissionError, reset} from 'redux-form';


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
const login = email => ({
  type: Constance.LOGIN_USER,
  payload: {
    email
  }
});
export const auth = creds =>
  async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signInWithEmailAndPassword(creds.email,creds.password);
    dispatch(login(creds.email));
    dispatch(closeModal());
  } catch (error) {
    throw new SubmissionError({_error: error.message})
  }

};
export const logout = () => ({type: Constance.SIGN_OUT_USER});
export const socialLogin = (selectedProvider) =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase();
  try {
    dispatch(closeModal());
    const user = await firebase.login({
      provider: selectedProvider,
      type: 'popup'
    });
  } catch (e) {
    console.log(e)
  }
};

//Register ac
export const registerUser = user =>
  async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    dispatch(closeModal());
  } catch (error) {
      throw new SubmissionError({_error: error.message})
  }

};

//Settings ac
export const updatePassword = (creds) =>
  async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;

  try {
    await user.updatePassword(creds.newPassword1);
    await dispatch(reset('account'));
    toastr.success('Success', 'Your password has been updated');
  } catch (e) {
    throw new SubmissionError({
      _error: e.message,
    })
  }
};

// User ac
export const updateProfile = user =>
  async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();

  try {
    await firebase.updateProfile(user);
    toastr.success('Success', 'Your profile has been updated')
  } catch (e) {
    console.log(e)
  }
  }