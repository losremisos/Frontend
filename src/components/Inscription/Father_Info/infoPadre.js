import React, { Component } from 'react';
import '../Family_Info_Components/Familiar';
import  InfoTrabajo  from '../Family_Info_Components/infoTrabajo';

class FatherInfo extends Component {
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
    this.setState({ checked: event.target.checked })
  }
  handleCheckboxChange1 = event =>{
    if(this.state.display==='none'){
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
        <div class="Informacion2"> 
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
                  <div>
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
                                    <label for="PadreVive">Vive (<span class="field-required">*</span>):</label>
                                    <select name="PadreVive" title="Padre Vive" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">Si</option>
                                      <option value="0">No</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div> 
                    <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PadreEstadoCivil">Estado Civil (<span class="field-required">*</span>):</label>
                                    <select name="PadreEstadoCivil" title="Estado Civil Padre" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">Soltero</option>
                                      <option value="2">Casado</option>
                                      <option value="3">Divorciado</option>
                                      <option value="4">Viudo</option>
                                      <option value="5">Union Libre</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div> 
                    <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PadreArchivo">Adjunte el documento de identidad(<span class="field-required">*</span>):</label>
                                    <input name="PadreArchivo" type="button" id="FilePadreArchivo" title="Padre Archivo CC" value="Seleccione un archivo" class="btn btn-style" />
                                    <span >&nbsp;&nbsp;&nbsp;</span>
                                    </div>
                    </div>             
                  </div>
                  <div className="row">
                    <div class="col-md-2">
                    <label><input type="checkbox" id="CedulaMilitar" checked={this.state.checked}
                        onChange={this.handleCheckboxChange}value="0"/>¿Tiene Cédula Militar?</label>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            <div>
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
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PPaisR">País de residencia (<span class="field-required">*</span>):</label>
                              <input name="PPaisR" type="text" maxlength="50" id="txtPDateN" title="Pais de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PDepartamentoR">Departamento de residencia (<span class="field-required">*</span>):</label>
                              <input name="PDepartamentoR" type="text" maxlength="50" id="txtPDateN" title="Departamento de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PMunicipioR">Municipio de residencia (<span class="field-required">*</span>):</label>
                              <input name="PMunicipioR" type="text" maxlength="50" id="txtPDateN" title="Municipio de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div> 
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PTelefono">Teléfono de contacto:</label>
                              <input name="PTelefono" type="text" maxlength="10" id="txtPDateN" title="Telefono de contacto: Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>             
                  </div>
                </div>
                </div>
                <div>
            <div className="row">
                    <div class="col-md-2">
                    <label><input type="checkbox" id="TrabajaActual" 
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange1}/>¿Trabaja Actualmente?</label>
                    </div>
            </div>


            <div class="Informacion2" style={{display:this.state.display}}> 
            <div class="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información Laboral</h4>
             </div>
                <div className="row" >
                    <div class="col-md-6"> 
                        <div class="control-group">
                                <label for="PProfesion">Profesión, ocupación u oficio (<span class="field-required">*</span>):</label>
                                <input name="PProfesion" type="text" maxlength="50" id="PProfesion" title="Profesión, ocupación u oficio Padre" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <div class="col-md-6"> 
                        <div class="control-group">
                                <label for="PEmpresa">Empresa en la que labora (<span class="field-required">*</span>):</label>
                                <input name="PEmpresa" type="text" maxlength="50" id="PEmpresa" title="Empresa en la que labora" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div class="col-md-6"> 
                        <div class="control-group">
                                <label for="PCargo">Cargo (<span class="field-required">*</span>):</label>
                                <input name="PCargo" type="text" maxlength="50" id="PProfesion" title="Cargo Padre" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PTipoTrabajador">Tipo de trabajador (<span class="field-required">*</span>):</label>
                                    <select name="PTipoTrabajador" title="Tipo de trabajador Padre" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">Empleado</option>
                                      <option value="2">Independiente</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div>
                    <div class="col-md-3"> 
                        <div class="control-group">
                                <label for="PFechaIngreso">Fecha de ingreso (<span class="field-required">*</span>):</label>
                                <input name="PFechaIngreso" type="date" maxlength="50" id="PFechaIngreso" title="Fecha de ingreso Padre" class="form-control" tabIndex="2" />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
                

                  <div className="row">
                    <div class="col-md-12">
                            <div class="control-group">
                              <label for="PDirecciónR">Dirección de Empresa:</label>
                              <input type="text" class="form-control" id="validationCustom20"  required/>
                            </div>
                    </div> 
                  </div>
                  <div className="row">
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PPaisR">País de empresa (<span class="field-required">*</span>):</label>
                              <input name="PPaisR" type="text" maxlength="50" id="txtPDateN" title="Pais de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PDepartamentoR">Departamento de empresa (<span class="field-required">*</span>):</label>
                              <input name="PDepartamentoR" type="text" maxlength="50" id="txtPDateN" title="Departamento de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PMunicipioR">Municipio de empresa (<span class="field-required">*</span>):</label>
                              <input name="PMunicipioR" type="text" maxlength="50" id="txtPDateN" title="Municipio de residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div> 
                    <div class="col-md-3">
                            <div class="control-group">
                              <label for="PTelefono">Teléfono de la empresa:</label>
                              <input name="PTelefono" type="text" maxlength="10" id="txtPDateN" title="Telefono de contacto: Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>             
                  </div>
                </div>
                </div>
                </div></div>
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
    );
  }
}



export default FatherInfo;
