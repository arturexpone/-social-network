import {combineReducers, createStore} from 'redux';
import {eventReducer} from './reducers/reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {reducer as FormReducer} from 'redux-form';


const reducers = combineReducers({
  form: FormReducer,
  events: eventReducer
});

export const store = createStore(reducers, devToolsEnhancer());