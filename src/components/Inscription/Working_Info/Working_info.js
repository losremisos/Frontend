import React, { Component } from 'react';
import './../Family_Info_Components/Familiar';

class Working_Info extends Component {
    state = {
        display: 'none',
        checked: false
      }
    handleCheckboxChange = event =>{
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
            <div className="row">
                    <div class="col-md-2">
                    <label><input type="checkbox" id="TrabajaActual" 
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}/>¿Trabaja Actualmente?</label>
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
                                <input name="PProfesion" type="text" maxlength="50" id="PProfesion" title="Profesión, ocupación u oficio Padre" class="form-control" tabIndex="2" required/>  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <div class="col-md-6"> 
                        <div class="control-group">
                                <label for="PEmpresa">Empresa en la que labora (<span class="field-required">*</span>):</label>
                                <input name="PEmpresa" type="text" maxlength="50" id="PEmpresa" title="Empresa en la que labora" class="form-control" tabIndex="2" required />  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div class="col-md-6"> 
                        <div class="control-group">
                                <label for="PCargo">Cargo (<span class="field-required">*</span>):</label>
                                <input name="PCargo" type="text" maxlength="50" id="PProfesion" title="Cargo Padre" class="form-control" tabIndex="2" required/>  
                                <span id="ctl00_MainContent_reqDocumentNumber" class="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PTipoTrabajador">Tipo de trabajador (<span class="field-required">*</span>):</label>
                                    <select name="PTipoTrabajador" title="Tipo de trabajador Padre" class="form-control" tabIndex="1"required>
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
                                <input name="PFechaIngreso" type="date" maxlength="50" id="PFechaIngreso" title="Fecha de ingreso Padre" class="form-control" tabIndex="2" required/>  
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
                </div>
        );
    }
}



export default Working_Info;