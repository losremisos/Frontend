import React, { Component } from 'react';
import '../Family_Info_Components/Familiar';

class DependenceInfo extends Component {
  render() {
    return (
      <div>
        
        
        <div className="App-head App">
        <div className="container">
        <div className="Informacion2"> 
        <div className="Pantalla">
            <div className="Informacion2"> 
            <div className="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Por favor indique, en la actualidad su dependencia económica. Recuerde que esta información será validada.</h4>
             </div>
                 <div className="row">
                 <div className="col-md-12">
                              <div className="control-group">
                                    <label for="DependenciaEconómica">Dependencia Económica (<span className="field-required">*</span>):</label>
                                    <select name="DependenciaEconómica" title="Dependencia Económica" className="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">Depende del Grupo familiar (Padre y/o Madre)</option>
                                      <option value="2">Depende de un Tercero</option>
                                      <option value="3">Independiente Económicamente</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                  </div>

                {/* 
                <div className="col-md-12">      
						    <input type="button" value= {this.props.value}  className="btn btn2-style" />
                </div>
                */}
                
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



export default DependenceInfo;
