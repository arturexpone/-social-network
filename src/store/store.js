import {combineReducers, createStore} from 'redux';
import {eventReducer, authReducer, modalReducer} from './reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {reducer as FormReducer} from 'redux-form';
import {reducer as ToastrReducer} from 'react-redux-toastr';
import {firebaseReducer} from 'react-redux-firebase';
import {createFirestoreInstance, firestoreReducer} from 'redux-firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
}

const fbConfig = {
  apiKey: "AIzaSyBmzx6h2qt6piDz6ccu7g5cvg3VvwOgETc",
  authDomain: "social-network-4b5c9.firebaseapp.com",
  databaseURL: "https://social-network-4b5c9.firebaseio.com",
  projectId: "social-network-4b5c9",
  storageBucket: "social-network-4b5c9.appspot.com",
  messagingSenderId: "727215084546",
  appId: "1:727215084546:web:01d8204fc4fbfa399f431b"
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const reducers = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  toastr: ToastrReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export const store = createStore(reducers, devToolsEnhancer());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}