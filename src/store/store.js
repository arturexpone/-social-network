import {combineReducers, createStore} from 'redux';
import {eventReducer} from './reducers/reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';


const reducers = combineReducers({
  events: eventReducer
});

export const store = createStore(reducers, devToolsEnhancer());