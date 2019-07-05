import React, { Component } from 'react';


class HigherEducationInfo extends Component {
  state = {
    display: 'none',
    checked: false
}
handleCheckboxChange = event => {
    if (this.state.display === 'none') {
        this.setState({ display: 'block' });
    } else {
        this.setState({ display: 'none' });
    }
    this.setState({ checked: event.target.checked })
}
  render() {
    return (
      <div>
          
          <div className="row">
                        <div className="row">
                            <div className="col-md-2">
                                <label><input type="checkbox" id="TrabajaActual"
                                    checked={this.state.checked}
                                    onChange={this.handleCheckboxChange} />¿Cursa o ha cursado algún estudio de educación superior?</label>
                            </div>
                        </div>

                    </div>
<div style={{display:this.state.display}}>
            <div className="form-row">
              <div className="form-group col-md-3">
              <label for="inputState55">Modalidad académica  (*)</label>
              <select id="inputState55" className="form-control" required>
                  <option selected disabled>Seleccione...</option>
                  <option value = "1">Técnica</option>
                  <option value = "2">Tecnólogica</option>
                  <option value = "3">Profesional Universitario</option>
                  <option value = "4">Especialización</option>
                  <option value = "5">Magister</option>
                  <option value = "6">Doctorado</option>
                  <option value = "7">Otros Estudios</option>                  
                </select>

              </div>
              <div className="form-group col-md-6">
                <label for="validationCustom56">Nombre de los estudios o título obtenido (*):</label>
                <input type="text" className="form-control" id="validationCustom56" required/>
              </div>
              <div className="form-group col-md-3">
                    <div className="form-row"> 
                        <div className="form-group col-md-6">
                            <label for="inputState56">Semestre (*)</label>
                            <select id="inputState56" className="form-control" required>
                                <option selected disabled>Seleccione...</option>
                                <option value = "1">I</option>
                                <option value = "2">II</option>
                                <option value = "3">III</option>
                                <option value = "4">IV</option>
                                <option value = "5">V</option>
                                <option value = "6">VI</option>
                                <option value = "7">VII</option>
                                <option value = "8">VIII</option> 
                                <option value = "9">IX</option> 
                                <option value = "10">X</option>                   
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputState56">Graduado (*)</label>
                            <select id="inputState56" className="form-control" required>
                                <option selected disabled>Seleccione...</option>
                                <option>No</option>
                                <option>Si</option>                                 </select> 
                        </div>
                    </div>
                </div>  
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                
              </div>

              <div className="form-group col-md-6">
                <label for="validationCustom68">Institución educativa donde cursó el último año:</label>
                <input type="text" className="form-control" id="validationCustom68" />
              </div>
              
              
              <div className="form-group col-md-3">
                  <label>Adjunte certificado de estudios (*):</label>
                  <div type="button" className="btn div_file">
                    <p className="text">Agregar archivo</p>
                    <input type="file" className="btn_enviar_1" id="btn_enviar_52" accept=".pdf" required></input>
                  </div>
              </div>
            </div>
</div>
            
            



                     
          
      </div>
    );
  }
}

export default HigherEducationInfo;
