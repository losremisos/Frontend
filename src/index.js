import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { App } from './components/app/App';
import reducers from './JS/reducers';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/collapse';
import 'font-awesome/css/font-awesome.min.css';


const store = createStore(reducers);

ReactDOM.render(

  <Provider store={store}>
      <App/>
  </Provider>,
  
  document.getElementById('root')
);
