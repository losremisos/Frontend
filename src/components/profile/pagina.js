import React, { Component } from 'react'
import Navigation from './nav'
import InfoPerfil from './infoperfil'
import Perfil from './perfil'
import './perfil.css';

class Pagina extends Component {

    render(){
        return(
          <div>
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
        )
      }

    }
    
    export default Pagina;
