import React, { Component } from 'react';
import Navigation  from '../navBar/nav'
import './Familiar.css';



class Formulario extends Component {

  render() {
    return (
      <div>
        
        <Navigation/>
        
        <div className="App-header App">
        <div class="col-md-12 page-title">
        <h3>Formulario de Registro</h3>
        </div>
        
        <div class="container">
          <div class="row">
            <div class="col-sm-3 Informacion">
              <div class="spacer"></div>
              <h4>Señor ciudadano</h4>
              <p>El primer paso para definir su situación militar es diligenciar este formulario, con el fin de crear un registro en nuestro portal. Introduzca su información personal completando <b>TODOS</b> los campos. Registre su <b>correo electrónico personal y cree una contraseña</b> que recuerde fácilmente, tenga en cuenta que con estos datos ingresará al portal para completar los demás pasos para definir su situación militar.</p><p>Si no cuenta con un correo electrónico, debe crearlo previamente para registrarse y recibir notificaciones de la Dirección de Reclutamiento.</p>
              <p>Sus datos personales serán protegidos y son requeridos para que usted pueda consultarlos o actualizarlos cuando lo requiera.</p><p>Al hacer click en el botón REGISTRARSE le será enviado un mensaje al correo electrónico que usted registró, verifíquelo y lea las instrucciones que allí se le indican para activar su cuenta y entrar a su perfil.  Si el mensaje no se encuentra en la bandeja de entrada por favor revise la bandeja de Spam o correo no deseado.</p>
              <div class="spacer"></div>
            </div>
            <div className="col-md-9">
              <div class="row"> 
                <div class="col-md-11 Informacion2 col-md-offset-1"> 
                  <div className="row">
                      <div class="col-md-6">
                              <div class="control-group">
                                    <label for="TipoDocumento">Tipo de documento (<span class="field-required">*</span>):</label>
                                    <select name="TipoDocumento" title="Tipo de documento de identidad" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="100000001">C&#233;dula de Ciudadan&#237;a</option>
                                      <option value="100000000">Tarjeta de Identidad</option>
                                      <option value="100000002">NUIP</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                      <div class="col-md-6">
                              <div class="control-group">
                                <label for="NumeroDocumento">Número de documento (<span class="field-required">*</span>):</label>
                                <input name="NumeroDocumento" type="text" maxlength="11" id="DocumentNumber" title="Número de documento de identidad" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                  </div>

                  <div className="row">
                    <div class="col-md-6">
                            <div class="control-group">
                             <label for="Nombre" >Nombre (<span class="field-required">*</span>):</label>
                             <input name="Nombre" type="text" maxlength="50" id="txtName" title="Primer nombre" class="form-control" />
                             <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                    <div class="col-md-6">
                            <div class="control-group">
                             <label for="NombreSeg" >Segundo Nombre:</label>
                             <input name="NombreSeg" type="text" maxlength="50" id="secTxtName" title="Segundo nombre" class="form-control" />
                             <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                  </div>

                  <div className="row">
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="Apellido">Apellidos (<span class="field-required">*</span>):</label>
                              <input name="Apellido" type="text" maxlength="50" id="txtLastName" title="Primer apellido" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="ApellidoSeg">Segundo Apellido:</label>
                              <input name="ApellidoSeg" type="text" maxlength="50" id="SecTxtLastName" title="Segundo apellido" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>             
                  </div>

                  <div className="row">
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="Correo">Correo (<span class="field-required">*</span>):</label>
                              <input name="Correo" type="text" maxlength="80" id="email" title="Correo" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                    <div class="col-md-6">
                            <div class="control-group">
                              <label for="Contraseña">Contraseña (<span class="field-required">*</span>):</label>
                              <input name="Contraseña" type="text" maxlength="80" id="password" title="Contraseña" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>           
                  </div>

                  <div class="row">
                        <div class="col-md-6">
                            <input type="button"  class="btn btn-style" value="Cancelar" />
                            &nbsp;        
						                <input type="button"  value="Consultar"  class="btn btn-style" />
                        </div>
                    </div>
                    
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <div class="bar"></div>
                                <div class="label"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                        </div>
                    </div>
                    
                    
                    <div class="row">
                        &nbsp;
                    </div>

                </div>
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



export default Formulario;
