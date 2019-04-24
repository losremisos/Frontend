import React, { Component } from 'react';
import escudo from './img/escudo.png';
import republica from './img/republica.png';
import './App.css';
import Navigation from './components/nav'
import InfoPerfil from './components/infoperfil';
import logo from './img/logo.png';
import Perfil from './components/perfil';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
        
        <div className="row">
          <img src={logo} className="" alt="reclutamiento"/>
          <div className="ml-auto">
          <img src={escudo} className="App-logo ml-auto" alt="logo" />
          <img src={republica} className="App-logo ml-auto" alt="republica"/>
          </div>
          
        </div>

        </header>
        <Navigation/>
        <div className="container-fluid">
          <div className="row">
            <div className="carta col-sm-2">
              <InfoPerfil/>
            </div>
            <div className="col-sm-8 ">
              <Perfil/>
            </div>
 
          </div>
          
        </div>
      
            
               

              
     
        
      </div>
    );
  }
}

export default App;
