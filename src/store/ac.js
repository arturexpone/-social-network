import {Constance} from './constance';
import {toastr} from 'react-redux-toastr';
import 'firebase/auth';
import {SubmissionError} from 'redux-form';


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
export const auth = creds => async (dispatch, getState, {getFirebase}) => {
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

//Register ac
export const registerUser = user => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    await createdUser.user.updateProfile({displayName: user.displayName});
    let newUser = {
      displayName: user.displayName,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.user.uid}`, {...newUser});
    dispatch(closeModal());
  } catch (err) {
    console.log(err)
  }
};