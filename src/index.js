import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/App';
import  Login  from './components/login/login';
import  Pagina from './components/profile/pagina';
import  Registry  from './components/regist/Regist';
import  Inscription from './components/Inscription/general';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/collapse';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


<<<<<<< HEAD
ReactDOM.render(
  
  <div>
    <Router>
    <App/>
    <div><Link to="/login/">Login</Link></div>
    <div><Link to="/profile/">Profile</Link></div>
    <div><Link to="/regist/">Regist</Link></div>
    <div><Link to="/inscription/">Inscription</Link></div>
    <div><Link to="/admininscription/">Admin</Link></div>
    <Route path="/login/" component={Login}/>
    <Route path="/profile/" component={Pagina}/>
    <Route path="/regist/" component={Regist}/>
    <Route path="/inscription/" component={() => <Inscription admin ={false} />} />
    <Route path="/admininscription/" component={() => <Inscription admin ={true} />} />
    </Router>
  </div>,document.getElementById('root')
);
=======

ReactDOM.render(<App/>,document.getElementById('root'));
>>>>>>> 770f76c1536d679d6b9648678b85f830bdb62487
