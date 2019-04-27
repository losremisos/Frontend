import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
  <div>
    <App/>
  </div>,document.getElementById('root')
);