import React, { Component } from 'react'
import Navigation from './nav'
import Footer from '../footer/footer'
import InfoPerfil from './infoperfil'
import Perfil from './perfil'
import './perfil.css';

export class Profile extends Component {

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
              <Footer/>
            </div>
        )
      }

    }
    
   /* export default Pagina;*/
