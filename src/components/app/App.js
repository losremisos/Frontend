import React from 'react';
import  Login  from '../login/login';
import  Pagina from '../profile/pagina';
import  Regist  from '../regist/Regist';
import  Inscription from '../Inscription/general';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/profile/" component={Pagina}/>
          <Route path="/regist/" component={Regist}/>
          <Route path="/inscription/" component={Inscription}/>
        </div>
      </BrowserRouter>
    )
  }
}