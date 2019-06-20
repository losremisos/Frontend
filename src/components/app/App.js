import React from 'react';
import { Navbar } from './../navBar/navBar';
import { Login } from './login/login';
import { Home } from './../app/home/home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

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
      localStorage.setItem("admin", false);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login} exact/>
          <Redirect from="/*" to="/home"/>
        </div>
      </BrowserRouter>
    )
  }
}