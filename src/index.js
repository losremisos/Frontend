import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/App';
import  Login  from './components/login/login';
import Pagina from './components/profile/pagina';
import  Regist  from './components/regist/Regist';
import  Familiar  from './components/formulario/Familiar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
  <div>
    <App/>
    <Login/>
    <Pagina/>
    <Regist/>
    <Familiar/>
    
    
  </div>,document.getElementById('root')
);
