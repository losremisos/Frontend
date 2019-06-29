import React, { Component } from 'react';


class AdditionalInfo extends Component {
  render() {
    return (
      <div>
          
                     
              

            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="validationCustom20">Direccion de residencia (*):</label>
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

export default AdditionalInfo;
