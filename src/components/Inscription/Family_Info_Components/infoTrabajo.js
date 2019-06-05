import React, { Component } from 'react';
import './Familiar';

class Formulario extends Component {
    state = {
        display: 'none',
        checked: false
      }
    handleCheckboxChange = event =>{
        if(this.state.display=='none'){
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
                                      <option value="100000001">Empleado</option>
                                      <option value="100000002">Independiente</option>
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
                <div className="row" >
                      <div class="col-md-3">
                              <div class="control-group">
                                    <label for="PTipoVia">Tipo de vía (<span class="field-required">*</span>):</label>
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
                                <label for="PNombreVia1">Nombre o número de vía (<span class="field-required">*</span>):</label>
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
                                <label for="PNombreVia2">Número de vía (<span class="field-required">*</span>):</label>
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
                              <label for="PBarrio">Barrio o Vereda (<span class="field-required">*</span>):</label>
                              <input name="PBarrio" type="text" maxlength="50" id="PBarrio" title="Barrio o vereda Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-12">
                            <div class="control-group">
                              <label for="PDirecciónR">Dirección de Empresa:</label>
                              <input name="PDirecciónR" readonly="readonly" type="text" maxlength="50" id="txtPDateN" title="Dirección de Residencia Padre" class="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
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



export default Formulario;