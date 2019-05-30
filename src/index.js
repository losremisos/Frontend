import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './components/app/App';
import store from './store';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/collapse';
import 'font-awesome/css/font-awesome.min.css';



ReactDOM.render(

  <Provider store={store}>
      <App/>
  </Provider>,
  
  document.getElementById('root')
);
