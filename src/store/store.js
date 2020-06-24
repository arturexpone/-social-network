import {combineReducers, createStore} from 'redux';
import {eventReducer, authReducer, modalReducer} from './reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {reducer as FormReducer} from 'redux-form';


const reducers = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer
});

export const store = createStore(reducers, devToolsEnhancer());