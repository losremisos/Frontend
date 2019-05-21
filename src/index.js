import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/App';
import  Login  from './components/login/login';
import  Pagina from './components/profile/pagina';
import  Regist  from './components/regist/Regist';
import  Inscription from './components/Inscription/general';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/collapse';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



ReactDOM.render(
  <div>
    <Router>
    <App/>
    <div><Link to="/login/">Login</Link></div>
    <div><Link to="/profile/">Profile</Link></div>
    <div><Link to="/regist/">Regist</Link></div>
    <div><Link to="/inscription/">Inscription</Link></div>
    <Route path="/login/" component={Login}/>
    <Route path="/profile/" component={Pagina}/>
    <Route path="/regist/" component={Regist}/>
    <Route path="/inscription/" component={Inscription}/>
    </Router>
  </div>,document.getElementById('root')
);
