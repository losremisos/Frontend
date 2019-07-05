import React, { Component } from 'react';


class AdditionalInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
        items:[]
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    let items = [...this.state.items];
    let item = {...items[ parseInt(event.target.id,10)]};
    item.value = event.target.value;
    items[parseInt(event.target.id,10)] = item;
    this.setState({items});
 }
  render() {
    if(this.props.submit==="1"){
      this.props.information[1] = this.state.items;
      this.props.getDatos(this.props.information);
    }
    return (
      <div>
          <div className="form-row">
              <div className="form-group col-md-12">
                <label for="validationCustom20">Direccion de residencia (*):</label>
                <input type="text" className="form-control" id="0" name="direccionres" placeholder="Direccion de Residencia" 
                onChange={this.handleChange} />
              </div>              
            </div>

            <div className="form-row">
              <div className="form-group col-md-3">
                <label for="validationCustom21">País de residencia (*):</label>
                <input type="text" className="form-control" id="1" name="paisres" placeholder="Pais de Residencia" 
                onChange={this.handleChange} />
              </div>
              <div className="form-group col-md-3">
                <label for="validationCustom22">Departamento de residencia (*):</label>
                <input type="text" className="form-control" id="2" name="departamentores" placeholder="Departamento de Residencia" 
                onChange={this.handleChange} />
              </div> 
              <div className="form-group col-md-3">
                <label for="validationCustom23">Municipio de residencia (*):</label>
                <input type="text" className="form-control" id="3" name="municipiores" placeholder="Municipio de Residencia" 
                onChange={this.handleChange} />
              </div>
              <div className="form-group col-md-3">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="validationCustom24">Telefono fijo:</label>
                        <input type="number" className="form-control" id="4" name="telefonof" placeholder="Telefono Fijo" 
                         onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
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
