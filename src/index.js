import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import ScrollToTop from './features/common/util/ScrollToTop';


const rootEl = document.getElementById('root');
let render = () => ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>, rootEl);


if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  })
}


render();