import React from 'react';
import { Navbar } from './../navBar/navBar';
import { Login } from './login/login';
import { Home } from './../home/home';
import { Inscription } from './../Inscription/general';
import { Profile } from './../profile/pagina';
import { Registry } from './../regist/Regist';
import { BrowserRouter, Route } from 'react-router-dom';

export class App extends React.Component {
  constructor() {
    super();
    let IsLogged = localStorage.getItem("IsLogged");
    if (IsLogged === "false") {
      localStorage.setItem("IsLogged", false);
      localStorage.setItem("AuxID", "");
      localStorage.setItem("jwt", "");
      localStorage.setItem("UsrID", "");
      localStorage.setItem("UsrName", "");
      localStorage.setItem("UsrLastName", "");
      localStorage.setItem("UsrProfile", false);
    }
  }

  render() {
    console.log(localStorage);
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path='/login' component={Login} />
          <Route path="/inscription/" component={() => <Inscription admin ={false} />} />
          <Route path="/admininscription/" component={() => <Inscription admin ={true} />} />
          <Route path='/registry' component={Registry}/>
          <Route path='/profile' component={Profile}/>
          <Route path="" component={Home} />              
        </div>
      </BrowserRouter>
    )
  }
}