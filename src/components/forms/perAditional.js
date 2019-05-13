import React, { Component } from 'react';


class PersonalAdd extends Component {
  render() {
    return (
      <div>
          
            <div class="form-row">
              <div class="form-group col-md-12">
                <label><strong>Datos de la Residencia</strong> (Diligencie los siguientes campos para formar la dirección de la residencia) </label>                                
              </div>              
            </div>


            <div class="form-row">
              <div class="form-group col-md-3">
              <label for="inputState06">Tipo de vía (*)</label>
              <select id="inputState06" class="form-control" required>
                  <option selected>Seleccione...</option>
                  <option>Autopista</option>
                  <option>Avenida</option>
                  <option>Av. Calle</option>
                  <option>Av. Carrera</option>
                  <option>Barrio</option>
                  <option>Calle</option>
                  <option>Callejón</option>
                  <option>Carrera</option>
                  <option>Circular</option>
                  <option>Diagonal</option>
                  <option>Kilómetro</option>
                  <option>Pasaje</option>
                  <option>Paso</option>
                  <option>Ramal</option>
                  <option>SubRamal</option>
                  <option>Tramo</option>
                  <option>Transversal</option>
                  <option>Vereda</option>
                </select>

              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom16">Nombre o número de via (*):</label>
                <input type="text" class="form-control" id="validationCustom16" required/>
              </div>
              <div class="form-group col-md-3">
               <label for="inputState07">Complemento vía principal:</label>
               <select id="inputState07" class="form-control">
                    <option selected>Seleccione...</option>
                    <option>Este</option>
                    <option>Manzana</option>
                    <option>Noreste</option>
                    <option>Noroccidente</option>
                    <option>Noroeste</option>
                    <option>Norte</option>
                    <option>Occidente</option>
                    <option>Oeste</option>
                    <option>Oriente</option>
                    <option>Sur</option>
                    <option>Sureste</option>
                    <option>Suroccidente</option>
                    <option>Suroeste</option>
                    <option>Suroriente</option>                  
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom17">Numero de vía secundaria: </label>
                <input type="text" class="form-control" id="validationCustom17" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="inputState08">Complemento vía secundaria:</label>
                <select id="inputState08" class="form-control">
                        <option selected>Seleccione...</option>
                        <option>Este</option>
                        <option>Manzana</option>
                        <option>Noreste</option>
                        <option>Noroccidente</option>
                        <option>Noroeste</option>
                        <option>Norte</option>
                        <option>Occidente</option>
                        <option>Oeste</option>
                        <option>Oriente</option>
                        <option>Sur</option>
                        <option>Sureste</option>
                        <option>Suroccidente</option>
                        <option>Suroeste</option>
                        <option>Suroriente</option>                  
                    </select>
              </div>

              <div class="form-group col-md-3">
                <label for="validationCustom18">Número de casa:</label>
                <input type="text" class="form-control" id="validationCustom18" />
              </div>

              <div class="form-group col-md-3">
                <label for="inputState09">Complemento:</label>
                <select id="inputState09" class="form-control">
                        <option selected>Seleccione...</option>
                        <option>Este</option>
                        <option>Manzana</option>
                        <option>Noreste</option>
                        <option>Noroccidente</option>
                        <option>Noroeste</option>
                        <option>Norte</option>
                        <option>Occidente</option>
                        <option>Oeste</option>
                        <option>Oriente</option>
                        <option>Sur</option>
                        <option>Sureste</option>
                        <option>Suroccidente</option>
                        <option>Suroeste</option>
                        <option>Suroriente</option>                  
                    </select>
              </div>
              
              <div class="form-group col-md-3">
                <label for="validationCustom19">Barrio o Vereda (*):</label>
                <input type="text" class="form-control" id="validationCustom19"  required/>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="validationCustom20">Direccion de residencia:</label>
                <input type="text" class="form-control" id="validationCustom20"  required/>
              </div>              
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="validationCustom21">País de residencia (*):</label>
                <input type="text" class="form-control" id="validationCustom21"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom22">Departamento de residencia (*):</label>
                <input type="text" class="form-control" id="validationCustom22"  required/>
              </div> 
              <div class="form-group col-md-3">
                <label for="validationCustom23">Municipio de residencia (*):</label>
                <input type="text" class="form-control" id="validationCustom23"  required/>
              </div>
              <div class="form-group col-md-3">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="validationCustom24">Telefono fijo:</label>
                        <input type="number" class="form-control" id="validationCustom24"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="validationCustom25">Telefono Movil(*):</label>
                        <input type="number" class="form-control" id="validationCustom25" required/>
                    </div>
                 </div>     
               </div>
            </div>

            <div class="dropdown-divider"></div>

            <div class="form-row">
              <div class="form-group col-md-12">
                <label><strong>Otros Datos Personales</strong></label>
              </div>    
              <div class="form-group col-md-3">
              <label for="inputState10">Tipo de vivienda (*):</label>
                <select id="inputState10" class="form-control" required>
                        <option selected>Seleccione...</option>
                        <option>Propia</option>
                        <option>Arriendo</option>
                        <option>Familiar</option>                                         
                    </select>
              </div>   
              <div class="form-group col-md-3">
              <label for="inputState11">Estrato (*):</label>
                <select id="inputState11" class="form-control" required>
                        <option selected>Seleccione...</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>        
                        <option>3</option>
                        <option>4</option>   
                        <option>5</option>   
                        <option>6</option>                                    
                    </select>
              </div> 
              <div class="form-group col-md-3">
              <label for="inputState12">¿Pertenece a Red Unidos (*):</label>
                <select id="inputState12" class="form-control" required>
                        <option selected>Seleccione...</option>
                        <option>No</option>
                        <option>Si</option>                                                           
                    </select>
              </div>                  
            </div>

            <div class="form-row">                 
              <div class="form-group col-md-3">
              <label for="inputState13">Tiene sisbén (*):</label>
                <select id="inputState13" class="form-control" required>
                        <option selected>Seleccione...</option>
                        <option>No</option>
                        <option>Si</option>
                    </select>
              </div>                                                
            </div>

            <div class="form-row">                 
              <div class="form-group col-md-3">
              <label for="inputState14">Esta a cargo del ICBF (*):</label>
                <select id="inputState14" class="form-control" required>
                        <option selected>Seleccione...</option>
                        <option>No</option>
                        <option>Si</option>
                    </select>
              </div>                                                
            </div>

            <div class="form-row"> 

                <div class="form-group col-md-3">
                    <div class="form-row"> 
                        <div class="form-group col-md-6">
                            <label for="validationCustom26">Estatura (cm)(*):</label>
                            <input type="number" class="form-control" id="validationCustom26" required/>
                        </div>
                        <div class="form-group col-md-6">
                             <label for="validationCustom27">Peso (Kg)(*):</label>
                            <input type="number" class="form-control" id="validationCustom27" required/>
                        </div>
                    </div>
                </div>

                <div class="form-group col-md-3">
                    <div class="form-row"> 
                        <div class="form-group col-md-6">
                            <label for="inputState15">Grupo sanguíneo (*):</label>
                            <select id="inputState15" class="form-control" required>
                                <option selected>Seleccione...</option>
                                <option>A</option>
                                <option>AB</option>
                                <option>B</option>
                                <option>O</option>                                
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputState16">Factor RH (*):</label>
                            <select id="inputState16" class="form-control" required>
                                <option selected>Seleccione...</option>
                                <option>RH +</option>
                                <option>RH -</option>                                                              
                            </select>
                        </div>
                    </div>
                </div>

              <div class="form-group col-md-3">
              <label for="inputState17">Número de hijos (*):</label>
                <select id="inputState17" class="form-control" required>
                        <option selected>Seleccione...</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6 ó mas</option>
                    </select>
              </div>                                                
            </div>

            <div class="form-row">                 
              <div class="form-group col-md-3">
              <label for="inputState18">Estado civil (*):</label>
                <select id="inputState18" class="form-control" required>
                        <option selected>Seleccione...</option>
                        <option>Soltero</option>
                        <option>Casado</option>
                        <option>Divorciado</option>                        
                        <option>Viudo</option>
                        <option>Union Libre</option>
                    </select>
              </div>                                                
            </div>




                     
          
      </div>
    );
  }
}

export default PersonalAdd;
