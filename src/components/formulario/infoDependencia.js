import React, { Component } from 'react';
import './Familiar';
import  InfoTrabajo  from './infoTrabajo';

class Formulario extends Component {
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
              <h4>Por favor indique, en la actualidad su dependencia económica. Recuerde que esta información será validada.</h4>
             </div>
                 <div className="row">
                 <div class="col-md-12">
                              <div class="control-group">
                                    <label for="DependenciaEconómica">Dependencia Económica (<span class="field-required">*</span>):</label>
                                    <select name="DependenciaEconómica" title="Dependencia Económica" class="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="100000001">Depende del Grupo familiar (Padre y/o Madre)</option>
                                      <option value="100000000">Depende de un Tercero</option>
                                      <option value="100000002">Independiente Económicamente</option>
                                    </select>
                                    <span  class="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
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
        </div>
      </div>
    );
  }
}



export default Formulario;
