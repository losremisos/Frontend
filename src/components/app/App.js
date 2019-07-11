import React from 'react';
import { Navbar } from './../navBar/navBar';
import { Footer } from './../footer/footer';
import { Login } from './../login/login';
import { Home } from './../home/home';
import { Inscription } from './../Inscription/general';
import { Profile } from './../profile/pagina';
import { Registry } from './../regist/Regist';
import { Mapa } from './../mapasitio/mapasitio';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';

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
          <Switch>
          <Route path="/home" component={Home}/>
          <Route path='/login' component={Login} />
          <Route path="/inscription/" component={Inscription}/>
          <Route path='/registry' component={Registry}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/mapasite' component={Mapa}/>
          <Redirect from="/*" to ="/home"/>    
          </Switch> 
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}