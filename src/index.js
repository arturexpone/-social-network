import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {rrfProps, store} from './store/store';

import ScrollToTop from './features/common/util/ScrollToTop';

import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';



const rootEl = document.getElementById('root');
let render = () => ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr
          position='bottom-right'
          transitionIn='fadeIn'
          transitionOut='fadeOut'
          />
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>, rootEl);


if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  })
}


render();