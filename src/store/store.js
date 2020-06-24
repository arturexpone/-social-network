import {combineReducers, createStore} from 'redux';
import {eventReducer, authReducer, modalReducer} from './reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {reducer as FormReducer} from 'redux-form';
import {reducer as ToastrReducer} from 'react-redux-toastr';


const reducers = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  toastr: ToastrReducer,
});

export const store = createStore(reducers, devToolsEnhancer());