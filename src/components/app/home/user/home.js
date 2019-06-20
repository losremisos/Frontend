import React from 'react';
import './home.css';

import SourceImg from './../../../../assets/home/tabPic.png'
import SourceImg2 from './../../../../assets/home/tabPic6.png'
import SourceImg3 from './../../../../assets/home/faq.jpg'
import SourceImg4 from './../../../../assets/home/escudo.png'




export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-12a">
          </div>
          <div className="row">
            <div className="col-md-12 services">
              <div className="row">
                <div className="col-md-12 ourservices">
                  <span id="TitleOurServices" className="control-label">Nuestros Servicios Tarjeta Militar</span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 services-main-box">
                  <div className="row">

                    <div className="col-md-4 services-box boxN1">
                      <h4>
                        <a id="TilteSeeMilitarySituation" className="services-link" href="/default">Consulte el estado de su situación militar</a>
                      </h4>
                      <p className="styleImg">
                        <a href="/defalut"><img src={SourceImg} alt="Consulta_Estado" /></a>
                      </p>
                      <ul>
                        <li>Seleccione el tipo de documento e ingrese el número del documento de identidad.</li>
                        <li>Seleccione el tipo de documento e ingrese el número del documento de identidad.</li>
                      </ul>
                      <p>
                      </p>
                    </div>

                    <div className="col-md-4 styleImg2">
                      <img src={SourceImg4} alt="Escudo_Ejercito" />
                    </div>

                    <div className="col-md-4 services-box boxN6">
                      <h4>
                        <a id="ContactUs" className="services-link" href="/defalut">Necesita ayuda: Contáctenos</a>
                      </h4>
                      <p className="styleImg">
                        <a href="/defalut"><img src={SourceImg2} alt="Ayuda" /></a>
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
            <div className="col-md-12 faq">
              <div className="row">
                <div className="col-md-3 style">
                  <img src={SourceImg3} alt="Question" />
                </div>
                <div className="col-md-6">
                  <div className="spacer"></div>
                  <p className="style">
                    <b>
                      <span id="MainContent_lblFaqs" className="control-label">Preguntas Frecuentes</span>
                    </b>
                  </p>
                  <p className="style">
                    <span id="MainContent_lblFaqsAnswers" className="control-label">Encuentre respuestas a las preguntas más comunes de nuestros usuarios.</span>
                  </p>
                </div>
                <div className="col-md-2 style">
                  <div className="spacer"></div>
                  <div className="half-spacer"></div>
                  <a href="/defalut" className="btn send">Ir a preguntas</a>
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