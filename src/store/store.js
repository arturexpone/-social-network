import {combineReducers, createStore} from 'redux';
import {eventReducer, modalReducer} from './reducers/reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {reducer as FormReducer} from 'redux-form';


const reducers = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer
});

export const store = createStore(reducers, devToolsEnhancer());