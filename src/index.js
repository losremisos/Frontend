import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/App';
import  Login  from './components/login/login';
import  Pagina from './components/profile/pagina';
import  Regist  from './components/regist/Regist';
import  Familiar  from './components/formulario/Familiar';
import  General from './components/forms/general';
import  Academico from './components/Formularios/academico';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/collapse';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
  <div>
    <App/>
    <Login/>
    <Pagina/>
    <Regist/>
    <Familiar/>
    <General/>
    <Academico/>
    
    
  </div>,document.getElementById('root')
);
