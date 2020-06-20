import {combineReducers, createStore} from 'redux';
import {reducer} from './reducers/reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';


const reducers = combineReducers({
  data: reducer
});

export const store = createStore(reducers, devToolsEnhancer());