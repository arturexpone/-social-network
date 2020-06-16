import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const rootEl = document.getElementById('root');
let render = () => ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  })
}

console.log(module);


render();