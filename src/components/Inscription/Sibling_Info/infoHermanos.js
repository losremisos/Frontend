import React, { Component } from 'react';

import '../Family_Info_Components/Familiar';

class SiblingInfo extends Component {
  state = {
    display: 'none',
    checked: false
  }
  onChange = () => {
    if(this.state.display==='none' ){
      this.setState({ display: 'block' });
    }else{
    this.setState({ display: 'none' });
    }
 }
  handleCheckboxChange = event =>{
    if(this.state.display==='none' ){
      this.setState({ display: 'block' });
    }else{
    this.setState({ display: 'none' });
    }
    this.setState({ checked: event.target.checked })
  }
  render() {
    return (
      <div>
        
        
        <div className="App-head App">
        <div class="container">
        <div className="row">
                            <div class="col-md-2">
                                <label><input type="checkbox" id="TrabajaActual"
                                    checked={this.state.checked}
                                    onChange={this.handleCheckboxChange} />¿Tiene hermanos?</label>
                            </div>
                        </div>
        <div style={{display:this.state.display}}> 
        <div class="Pantalla">
            <div class="Informacion2"> 
            <div class="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información Básica</h4>
             </div>
                <div className="row" >
                      <div class="col-md-3">
                              <div class="control-group">
                                    <label for="TipoDocumento">Tipo de documento (<span class="field-required">*</span>):</label>
                                    <select name="TipoDocumento" title="Tipo de documento de identidad" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">C&#233;dula de Ciudadan&#237;a</option>
                                      <option value="0">Tarjeta de Identidad</option>
                                      <option value="2">NUIP</option>
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
                      
                  </div>
                  <div >
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
                                      <option value="1">Femenino</option>
                                      <option value="2">Masculino</option>
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
            <div >
            <div class="Informacion2"> 
            <div class="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información de Residencia</h4>
             </div>
                
                  <div className="row">
                    <div class="col-md-12">
                            <div class="control-group">
                              <label for="PDirecciónR">Dirección de Residencia:</label>
                              <input type="text" class="form-control" id="validationCustom20"  required/>
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
                
                
                {/*
                <div class="col-md-12">      
						    <input type="button" value= {this.props.value}  class="btn btn2-style" />
                </div>
                */}

                </div>
                </div>

        </div>
        
        </div>
      </div>
    );
  }
}



export default SiblingInfo;
