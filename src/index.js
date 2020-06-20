import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';


const rootEl = document.getElementById('root');
let render = () => ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, rootEl);


if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  })
}


render();