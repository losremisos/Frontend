import React, { Component } from 'react';
import Navigation  from '../navBar/nav'
import './home.css';
import SourceImg from './tabPic.png'
import SourceImg2 from './tabPic6.png'
import SourceImg3 from './faq.jpg'
import SourceImg4 from './escudo.png'




class Home extends Component {

  render() {
    return (
      <div>
        
        <Navigation/>
        
        <div className="row2">
            <div className="navbar ournav">
                <div className="container ourcontainer">
                    <div className= "collapse navbar-collapse ourcollapse">
                        <ul className= "nav navbar-nav2">
                            <li id="Inicio">
                                <a href="/Default">
                                    <span id="inicioHome" >Inicio</span>
                                </a>
                            </li>
                            <li id="Consultas">
                                <a href="/Default">
                                    <span id="consultasHome" >Consultas</span>
                                </a>
                            </li>
                            <li id="Liquidacion">
                                <a href="/Default">
                                    <span id="liquidacionHome" >Soporte Liquidacion</span>
                                </a>
                            </li>
                            <li id="Perfil">
                                <a href="/Default">
                                    <span id="perfilHome" >Mi Perfil</span>
                                </a>
                            </li>

                            <li id="Nombre">
                                    <span id="nombreHome" ><span class="glyphicon glyphicon-user"></span> BIENVENIDO XDev</span>
                            </li>
                            <li id="Salir">
                                <a href="/Default">
                                    <span id="salirHome" >Salida</span>
                                </a>
                            </li>
                        </ul>
                    </div>  
                </div>
            </div> 
        </div>

        <div className="container">

            <div class="col-md-12a">
            </div>
            <div class="row">
                <div class="col-md-12 services">
                    <div class="row">
                        <div class="col-md-12 ourservices">
                            <span id="TitleOurServices" class="control-label">Nuestros Servicios Tarjeta Militar</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 services-main-box">
                            <div class="row">
                            
                                <div class="col-md-4 services-box boxN1">
                                    <h4>
                                        <a id="TilteSeeMilitarySituation" class="services-link" href="/default">Consulte el estado de su situación militar</a>
                                    </h4>
                                    <p class="styleImg">
                                        <a href="/defalut"><img src={SourceImg} alt="Consulta_Estado"/></a>
                                    </p>
                                    <ul>
                                        <li>Seleccione el tipo de documento e ingrese el número del documento de identidad.</li>
                                        <li>Seleccione el tipo de documento e ingrese el número del documento de identidad.</li>
                                    </ul>                    
                                    <p>
                                    </p>  
                                </div>

                                <div class="col-md-4 styleImg2">
                                    <img src={SourceImg4} alt="Escudo_Ejercito"/>
                                </div>

                                <div class="col-md-4 services-box boxN6">
                                    <h4>
                                        <a id="ContactUs" class="services-link" href="/defalut">Necesita ayuda: Contáctenos</a>
                                    </h4>
                                    <p class="styleImg">
                                        <a href="/defalut"><img src={SourceImg2} alt="Ayuda"/></a>
                                    </p>
                                    <ul>
                                        <li>Contamos con un servicio en línea de apoyo al usuario y una línea telefónica a nivel nacional.</li>
                                        <li>Sus inquietudes, comentarios y sugerencias nos permiten prestarle un mejor servicio.</li>
                                    </ul>                    
                                    <p>
                                    </p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 

                </div>
                <div class="col-md-12 faq">
                    <div class="row">
                        <div class="col-md-3 style">
                                <img src={SourceImg3} alt="Question"/>
                            </div>
                            <div class="col-md-6">
                                <div class="spacer"></div>
                                <p class="style">
                                    <b>
                                        <span id="MainContent_lblFaqs" class="control-label">Preguntas Frecuentes</span>
                                    </b>
                                </p>
                                <p class="style">
                                    <span id="MainContent_lblFaqsAnswers" class="control-label">Encuentre respuestas a las preguntas más comunes de nuestros usuarios.</span>
                                </p>
                            </div>
                            <div class="col-md-2 style">
                                <div class="spacer"></div>
                                <div class="half-spacer"></div>
                                <a href="/defalut" class="btn send">Ir a preguntas</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div className="footer" >
        
        <hr></hr> 
        <label className="painted">DIRECCIÓN DE RECLUTAMIENTO</label>
        <br />
        <label>Av. Caracas No. 9-51 - Bogotá-Colombia</label>
        <br />
        <label>PBX: +57 (1) 3362211 Ext: 302 - 303 - 304 - 305 - 306 - 307 </label>
        </div>

        

      </div>
    );
  }
}



export default Home;
