import React, { Component } from 'react';

import './App.css';



//import styled from 'styled-components';
import Reservas_Logo from './Img/logo.png';
import Ejercito_logo from './Img/LOGO_EJC.png';
import Colombia_logo from './Img/escudo.png';




const styleImg={width: '22%', marginTop: '15px'};
const styleImg2={width: '100%', marginTop: '15px'};
const styleButt={width:'100px'};

class Formulario extends React.Component {

  render() {
    return (
      <div className="App">
        <header >
        <div>
          <div className="style-institucional"></div>
          
            <div className="container-h row">
              <div className="col-md-7 col-sm-7 padding-h">
                <div className="img-header1" ><img src={Reservas_Logo} className="img-fluid" alt="logo" /></div>
                <div className="img-header2" ><img src={Ejercito_logo}  style={styleImg} className="img-fluid" alt="ejercitoLogo" /></div>
                <div className="img-header3" ><img src={Colombia_logo}  style={styleImg2} className="img-fluid" alt="colombiaLogo" /></div>
                <div className="background1 hidden-sm hidden-xs"></div>
              </div>
            </div>
        </div> 
        <div className="middle">
          <div className="page-title row"><h3 >Formulario de Registro </h3> </div>
          <div className="col-md-3 Informacion">
              <div class="spacer"></div>
              <h4>Señor ciudadano</h4>
            <p>El primer paso para definir su situación militar es diligenciar este formulario, con el fin de crear un registro en nuestro portal. Introduzca su información personal completando <b>TODOS</b> los campos. Registre su <b>correo electrónico personal y cree una contraseña</b> que recuerde fácilmente, tenga en cuenta que con estos datos ingresará al portal para completar los demás pasos para definir su situación militar.</p><p>Si no cuenta con un correo electrónico, debe crearlo previamente para registrarse y recibir notificaciones de la Dirección de Reclutamiento.</p>
            <p>Sus datos personales serán protegidos y son requeridos para que usted pueda consultarlos o actualizarlos cuando lo requiera.</p><p>Al hacer click en el botón REGISTRARSE le será enviado un mensaje al correo electrónico que usted registró, verifíquelo y lea las instrucciones que allí se le indican para activar su cuenta y entrar a su perfil.  Si el mensaje no se encuentra en la bandeja de entrada por favor revise la bandeja de Spam o correo no deseado.</p>
            <div class="spacer"></div>
          </div>
          <div className="col-md-9 App-header ">
            <div class="col-md-11 formOut col-md-offset-1"> 
            <div className="row">
            <br/>
                    <div class="col-md-6">
                            <div class="control-group">
                                  <label for="TipoDocumento">Tipo de documento (<span class="field-required">*</span>):</label>
                                  <br/>
                                  <select name="TipoDocumento" title="Tipo de documento de identidad" class="form-control">
                                    <option selected="selected" value="-1">Seleccione...</option>
                                    <option value="100000001">C&#233;dula de Ciudadan&#237;a</option>
                                    <option value="100000000">Tarjeta de Identidad</option>
                                    <option value="100000002">NUIP</option>
                                  </select>
                                  <span id="ctl00_MainContent_reqDocumentType" class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="NumeroDocumento">Número de documento (<span class="field-required">*</span>):</label>
                              <br/>
                              <input name="NumeroDocumento" type="text" maxlength="11" id="DocumentNumber" title="Número de documento de identidad" class="form-control" />  
                              <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                </div>
                <div className="row">
                <br/>
                    <div class="col-md-6">
                            <div class="control-group">
                             <label for="Nombres" >Nombres (<span class="field-required">*</span>):</label>
                             <br/>
                             <input name="Nombres" type="text" maxlength="50" id="txtName" title="Primer nombre" class="form-control" />
                             <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
              
                </div>

                <div className="row">
                <br/>
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="Apellidos">Apellidos (<span class="field-required">*</span>):</label>
                              <br/>
                              <input name="Apellidos" type="text" maxlength="50" id="txtLastName" title="Primer apellido" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <br/><br/>              
                </div>

                <div className="row">
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="Correo">Correo (<span class="field-required">*</span>):</label>
                              <br/>
                              <input name="Correo" type="text" maxlength="80" id="email" title="Correo" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="Contraseña">Contraseña (<span class="field-required">*</span>):</label>
                              <br/>
                              <input name="Contraseña" type="text" maxlength="80" id="password" title="Contraseña" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <br/><br/>            
                </div>

                <div className="row">
                    <br/><br/>
                    <div class="col-md-6">
                              <input type="button" onclick="JEREC.Register.Cancel();" class="btn btn-default"  value="Cancelar" style={styleButt}/>
                              &nbsp;&nbsp;
                              <input type="button" name="consultar" value="Consultar" onclick="JEREC.Register.ValidatePage();" id="btnConsultar" class="btn btn-primary" style={styleButt} />
                    </div> 
                    <br/> <br/>              
                </div>
               
            </div>
          </div>
        </div>
        <div className="footer" >
        
          <hr></hr>
          <div class="row">
                    <div class="col-md-12 rights">
                        <span class="painted">
                            <span class="control-label">DIRECCIÓN DE RECLUTAMIENTO</span>
                        </span>
                        <br />
                        <span  class="control-label">Av. Caracas No. 9-51 - Bogotá-Colombia</span>
                        <br />
                        <span  class="control-label">PBX:</span>
                        <span  class="control-label">+57 (1) 3362211 Ext: 302 - 303 - 304 - 305 - 306 - 307 </span>
                        <br />
                    </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}



export default Formulario;
