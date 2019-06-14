import React, { Component } from 'react';


class HigherEducationInfo extends Component {
  render() {
    return (
      <div>
          
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Para incluir uno o varios estudios de educación superior, usted debe ingresar la informacion solicitada en los campos que aparecen a continuación; luego de esto, oprima el botón Agregar Información y la información será agregada a la lista de estudios de educación superior. </label>                                
              </div>              
            </div>


            <div class="form-row">
              <div class="form-group col-md-3">
              <label for="inputState55">Modalidad académica  (*)</label>
              <select id="inputState55" class="form-control" required>
                  <option selected disabled>Seleccione...</option>
                  <option>Técnica</option>
                  <option>Tecnólogica</option>
                  <option>Profesional Universitario</option>
                  <option>Especialización</option>
                  <option>Magister</option>
                  <option>Doctorado</option>
                  <option>Otros Estudios</option>                  
                </select>

              </div>
              <div class="form-group col-md-6">
                <label for="validationCustom56">Nombre de los estudios o título obtenido (*):</label>
                <input type="text" class="form-control" id="validationCustom56" required/>
              </div>
              <div class="form-group col-md-3">
                    <div class="form-row"> 
                        <div class="form-group col-md-6">
                            <label for="inputState56">Semestre (*)</label>
                            <select id="inputState56" class="form-control" required>
                                <option selected disabled>Seleccione...</option>
                                <option>I</option>
                                <option>II</option>
                                <option>III</option>
                                <option>IV</option>
                                <option>V</option>
                                <option>VI</option>
                                <option>VII</option>
                                <option>VIII</option> 
                                <option>IX</option> 
                                <option>X</option>                   
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState56">Graduado (*)</label>
                            <select id="inputState56" class="form-control" required>
                                <option selected disabled>Seleccione...</option>
                                <option>No</option>
                                <option>Si</option>                                 </select> 
                        </div>
                    </div>
                </div>  
            </div>
            <div class="form-row">
              <div class="form-group col-md-3">
                
              </div>

              <div class="form-group col-md-6">
                <label for="validationCustom68">Institución educativa donde cursó el último año:</label>
                <input type="text" class="form-control" id="validationCustom68" />
              </div>
              
              
              <div class="form-group col-md-3">
                  <label>Adjunte certificado de estudios (*):</label>
                  <div type="button" class="btn div_file">
                    <p class="text">Agregar archivo</p>
                    <input type="file" class="btn_enviar_1" id="btn_enviar_52" accept=".pdf" required></input>
                  </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-12">                
                <input type="text" class="form-control" id="validationCustom20"  required placeholder="Lista de titulos obtenidos"/>
              </div>              
            </div>

            <div class="form-row">
                <div class="form-group col-md-7">

                </div>
                <div class="form-group col-md-5">
                    <div class="form-row"> 
                        <div class="form-group col-md-3">
                            <button type="submit" className="btn btn-style-submit2 ">Cancelar</button>
                        </div>
                        <div class="form-group col-md-9">
                            <button type="submit" className="btn btn-style-submit2 ">Guardar Informacion</button>
                        </div>
                    </div>
                </div>
            </div>

            



                     
          
      </div>
    );
  }
}

export default HigherEducationInfo;
