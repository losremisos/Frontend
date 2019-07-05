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
                    <div className="col-md-2">
                    <label><input type="checkbox" id="TrabajaActual" 
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}/>¿Trabaja Actualmente?</label>
                    </div>
            </div>


            <div className="Informacion2" style={{display:this.state.display}}> 
            <div className="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información Laboral</h4>
             </div>
                <div className="row" >
                    <div className="col-md-6"> 
                        <div className="control-group">
                                <label for="PProfesion">Profesión, ocupación u oficio (<span className="field-required">*</span>):</label>
                                <input name="PProfesion" type="text" maxLength="50" id="PProfesion" title="Profesión, ocupación u oficio Padre" className="form-control" tabIndex="2" required/>  
                                <span id="ctl00_MainContent_reqDocumentNumber" className="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="control-group">
                                <label for="PEmpresa">Empresa en la que labora (<span className="field-required">*</span>):</label>
                                <input name="PEmpresa" type="text" maxlength="50" id="PEmpresa" title="Empresa en la que labora" className="form-control" tabIndex="2" required />  
                                <span id="ctl00_MainContent_reqDocumentNumber" className="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-6"> 
                        <div className="control-group">
                                <label for="PCargo">Cargo (<span className="field-required">*</span>):</label>
                                <input name="PCargo" type="text" maxlength="50" id="PProfesion" title="Cargo Padre" className="form-control" tabIndex="2" required/>  
                                <span id="ctl00_MainContent_reqDocumentNumber" className="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                              <div className="control-group">
                                    <label for="PTipoTrabajador">Tipo de trabajador (<span className="field-required">*</span>):</label>
                                    <select name="PTipoTrabajador" title="Tipo de trabajador Padre" className="form-control" tabIndex="1"required>
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">Empleado</option>
                                      <option value="2">Independiente</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div>
                    <div className="col-md-3"> 
                        <div className="control-group">
                                <label for="PFechaIngreso">Fecha de ingreso (<span className="field-required">*</span>):</label>
                                <input name="PFechaIngreso" type="date" maxlength="50" id="PFechaIngreso" title="Fecha de ingreso Padre" className="form-control" tabIndex="2" required/>  
                                <span id="ctl00_MainContent_reqDocumentNumber" className="field-validation-error" >&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
                                  
                  <div className="row">
                    <div className="col-md-12">
                            <div className="control-group">
                              <label for="PDirecciónR">Dirección de Empresa:</label>
                              <input type="text" className="form-control" id="validationCustom20"  required/>
                            </div>
                    </div> 
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PPaisR">País de empresa (<span className="field-required">*</span>):</label>
                              <input name="PPaisR" type="text" maxlength="50" id="txtPDateN" title="Pais de residencia Padre" className="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PDepartamentoR">Departamento de empresa (<span className="field-required">*</span>):</label>
                              <input name="PDepartamentoR" type="text" maxlength="50" id="txtPDateN" title="Departamento de residencia Padre" className="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PMunicipioR">Municipio de empresa (<span className="field-required">*</span>):</label>
                              <input name="PMunicipioR" type="text" maxlength="50" id="txtPDateN" title="Municipio de residencia Padre" className="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div> 
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PTelefono">Teléfono de la empresa:</label>
                              <input name="PTelefono" type="text" maxlength="10" id="txtPDateN" title="Telefono de contacto: Padre" className="form-control" />
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