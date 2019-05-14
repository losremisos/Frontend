import React, { Component } from 'react';
import './Familiar';
import  InfoTrabajo  from './infoTrabajo';

class Formulario extends Component {
  state = {
    display: 'none',
    checked: false
  }
  onChange = () => {
    if(this.state.display=='none' ){
      this.setState({ display: 'block' });
    }else{
    this.setState({ display: 'none' });
    }
 }
  handleCheckboxChange = event =>{
    this.setState({ checked: event.target.checked })
  }
  render() {
    return (
      <div>
        
        
        <div className="App-head App">
        <div class="container">
        <div class="Informacion2"> 
        <div class="Pantalla">
            <div class="Informacion2"> 
            <div class="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información Básica</h4>
             </div>
             <p>Seleccione el tipo de identificación, luego ingrese el número de identificación y oprima buscar. Posteriormente ingrese 
                los datos solicitados. Seguido de esto agregue la información a la lista de hermanos. Cuando desee grabar la información,
                presione el botón Grabar Informacion de los Hermanos.</p>
                  <div className="row" >
                      <div class="col-md-3">
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
                      <div class="col-md-3">
                              <div class="control-group">
                                <label for="NumeroDocumento">Número de documento (<span class="field-required">*</span>):</label>
                                <input name="NumeroDocumento" type="text" maxlength="11" id="DocumentNumber" title="Número de documento de identidad" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                      <div class="col-md-2">
                            <input type="button" onClick={this.onChange} class="btn btn1-style" value="Buscar" />
                      </div>
                      <div class="col-md-1">      
						                <input type="button" onClick={this.onChange} value="Limpiar"  class="btn btn1-style" />
                        </div>
                      
                  </div>
                  <div style={{display:this.state.display}}>
                  <div className="row">
                    <div class="col-md-3">
                            <div class="control-group">
                             <label for="Nombre" >Nombre (<span class="field-required">*</span>):</label>
                             <input name="Nombre" type="text" maxlength="50" id="txtName" title="Primer nombre" class="form-control" />
                             <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                    <div class="col-md-3">
                            <div class="control-group">
                             <label for="NombreSeg" >Segundo Nombre:</label>
                             <input name="NombreSeg" type="text" maxlength="50" id="secTxtName" title="Segundo nombre" class="form-control" />
                             <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="Apellido">Apellidos (<span class="field-required">*</span>):</label>
                              <input name="Apellido" type="text" maxlength="50" id="txtLastName" title="Primer apellido" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="ApellidoSeg">Segundo Apellido:</label>
                              <input name="ApellidoSeg" type="text" maxlength="50" id="SecTxtLastName" title="Segundo apellido" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="FechaNacimiento">Fecha de Nacimiento (<span class="field-required">*</span>):</label>
                              <input name="FechaNacimiento" type="date" maxlength="50" id="txtPDateN" title="Fecha Nacimiento" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-3">
                              <div class="control-group">
                                    <label for="Hgenero">Genero (<span class="field-required">*</span>):</label>
                                    <select name="Hgenero" title="Hermano Genero" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="100000000">Femenino</option>
                                      <option value="100000001">Masculino</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div> 
                    <div class="col-md-6">
                              <div class="control-group">
                                    <label for="HProfesion">Profesión, ocupación u oficio:</label>
                                    <input name="HProfesion" type="text" maxlength="50" id="HProfesion" title="Hermano Profesion" class="form-control" />
                                    <span >&nbsp;&nbsp;&nbsp;</span>
                                </div>
                    </div> 
                             
                  </div>
                </div>
                </div>
                </div>
            <div style={{display:this.state.display}}>
            <div class="Informacion2"> 
            <div class="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información de Residencia</h4>
             </div>
                <div className="row" >
                      <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PTipoVia">Tipo de vía:</label>
                                    <select name="PTipoVia" title="Tipo de Via Residencia Padre" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="100000001">Autopista</option>
                                      <option value="100000002">Avenida</option>
                                      <option value="100000003">Av. Calle</option>
                                      <option value="100000004">Av.Carrera</option>
                                      <option value="100000005">Barrio</option>
                                      <option value="100000006">Calle</option>
                                      <option value="100000007">Callejón</option>
                                      <option value="100000008">Carrera</option>
                                      <option value="100000009">Circular</option>
                                      <option value="100000010">Diagonal</option>
                                      <option value="100000011">Kilómetro</option>
                                      <option value="100000012">Pasaje</option>
                                      <option value="100000013">Paso</option>
                                      <option value="100000014">Ramal</option>
                                      <option value="100000015">Subramal</option>
                                      <option value="100000016">Tramo</option>
                                      <option value="100000017">Transversal</option>
                                      <option value="100000018">Vereda</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                      <div class="col-md-3">
                              <div class="control-group">
                                <label for="PNombreVia1">Nombre o número de vía:</label>
                                <input name="PNombreVia1" type="text" maxlength="50" id="PNombreVia1" title="Nombre o número de vía1 Padre" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                      <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PComplementoVia1">Complemento vía principal:</label>
                                    <select name="PComplementoVia1" title="Complemento vía principal Padre" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="100000001">Este</option>
                                      <option value="100000002">Manzana</option>
                                      <option value="100000003">Noreste</option>
                                      <option value="100000004">Noroccidente</option>
                                      <option value="100000005">Noroeste</option>
                                      <option value="100000006">Norte</option>
                                      <option value="100000007">Occidente</option>
                                      <option value="100000008">Oeste</option>
                                      <option value="100000009">Oriente</option>
                                      <option value="100000010">Sur</option>
                                      <option value="100000011">Sureste</option>
                                      <option value="100000012">Suroccidente</option>
                                      <option value="100000013">Suroeste</option>
                                      <option value="100000014">Suroriente</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                      <div class="col-md-3">
                              <div class="control-group">
                                <label for="PNombreVia2">Número de vía:</label>
                                <input name="PNombreVia2" type="text" maxlength="50" id="PNombreVia2" title="Nombre o número de vía2 Padre" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                  </div>
                  
                  <div className="row">
                  <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PComplementoVia2">Complemento vía secundaria:</label>
                                    <select name="PComplementoVia2" title="Complemento vía secundaria Padre" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="100000001">Este</option>
                                      <option value="100000002">Manzana</option>
                                      <option value="100000003">Noreste</option>
                                      <option value="100000004">Noroccidente</option>
                                      <option value="100000005">Noroeste</option>
                                      <option value="100000006">Norte</option>
                                      <option value="100000007">Occidente</option>
                                      <option value="100000008">Oeste</option>
                                      <option value="100000009">Oriente</option>
                                      <option value="100000010">Sur</option>
                                      <option value="100000011">Sureste</option>
                                      <option value="100000012">Suroccidente</option>
                                      <option value="100000013">Suroeste</option>
                                      <option value="100000014">Suroriente</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                    <div class="col-md-3">
                            <div class="control-group">
                             <label for="PNumeroCasa" >Número de casa:</label>
                             <input name="PNumeroCasa" type="text" maxlength="50" id="secTxtName" title="Numero de casa Padre" class="form-control" />
                             <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                    <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PComplemento">Complemento:</label>
                                    <select name="PComplemento" title="Complemento Padre" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="100000001">Este</option>
                                      <option value="100000002">Manzana</option>
                                      <option value="100000003">Noreste</option>
                                      <option value="100000004">Noroccidente</option>
                                      <option value="100000005">Noroeste</option>
                                      <option value="100000006">Norte</option>
                                      <option value="100000007">Occidente</option>
                                      <option value="100000008">Oeste</option>
                                      <option value="100000009">Oriente</option>
                                      <option value="100000010">Sur</option>
                                      <option value="100000011">Sureste</option>
                                      <option value="100000012">Suroccidente</option>
                                      <option value="100000013">Suroeste</option>
                                      <option value="100000014">Suroriente</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div> 
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PBarrio">Barrio o Vereda:</label>
                              <input name="PBarrio" type="text" maxlength="50" id="PBarrio" title="Barrio o vereda Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-12">
                            <div class="control-group">
                              <label for="PDirecciónR">Dirección de Residencia:</label>
                              <input name="PDirecciónR" readonly="readonly" type="text" maxlength="50" id="txtPDateN" title="Dirección de Residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div> 
                  </div>
                  <div className="row">
                    <div class="col-md-4">
                            <div class="control-group">
                              <label for="PPaisR">País de residencia:</label>
                              <input name="PPaisR" type="text" maxlength="50" id="txtPDateN" title="Pais de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-4">
                            <div class="control-group">
                              <label for="PDepartamentoR">Departamento de residencia:</label>
                              <input name="PDepartamentoR" type="text" maxlength="50" id="txtPDateN" title="Departamento de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-4">
                            <div class="control-group">
                              <label for="PMunicipioR">Municipio de residencia:</label>
                              <input name="PMunicipioR" type="text" maxlength="50" id="txtPDateN" title="Municipio de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div> 
                  </div>
                </div>
                </div>
                </div>
                
                <div class="col-md-12">      
						    <input type="button" value= "Agregar Información"  class="btn btn2-style" />
                </div>
                <div class="Informacion2">
                    <div style={{textAlign: "left" }}>
                         <h4>Lista de Hermanos</h4>
                    </div>
                
                </div>
                <div class="col-md-12">      
						    <input type="button" value= {this.props.value}  class="btn btn2-style" />
                </div>
                </div>
                </div>

        </div>
        
        </div>
      </div>
    );
  }
}



export default Formulario;
