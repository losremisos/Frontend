import React, { Component } from 'react';

import '../Family_Info_Components/Familiar';

class SiblingInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      items: [],
      firstload : true,
      display: 'none',
      checked: false,
      confirmar: true
      
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let newitem = this.state.items;
    newitem[parseInt(event.target.id, 10)] = event.target.value;
    this.setState({ items:newitem });
  }
  onChange = () => {
    if(this.state.display==='none' ){
      this.setState({ display: 'block' });
    }else{
    this.setState({ display: 'none' });
    }
 }
  handleCheckboxChange = event =>{
    if(this.state.display==='none' ){
      this.setState({ display: 'block' });
    }else{
    this.setState({ display: 'none' });
    }
    let newitem = this.state.items;
    newitem[parseInt(event.target.id, 10)] = event.target.checked;
    this.setState({ checked: event.target.checked, items:newitem });
  }
  render() {
    if(this.state.firstload===true && this.props.load===true){
      let info = this.props.information[7]
      this.setState({items:info , firstload:false, confirmar:true})
      if(info[0]===true){
          this.setState({checked:true, display: 'block'})
      }
      
    }
    console.log(this.props.submit);
      
    if (this.props.submit === "1" && this.state.confirmar===true) {
      console.log(this.state.items);
      this.props.information[7] = this.state.items;
      this.props.getDatos(this.props.information);
      this.setState({firstload:true, confirmar:false})
    }
    return (
      <div>
        <div className="App-head App">
        <div className="container">
        <div className="row">
                            <div className="col-md-2">
                                <label><input type="checkbox" id="TrabajaActual"
                                    checked={this.state.checked}
                                    onChange={this.handleCheckboxChange} id ="0"/>¿Tiene hermanos?</label>
                            </div>
                        </div>
        <div style={{display:this.state.display}}> 
        <div className="Pantalla">
            <div className="Informacion2"> 
            <div className="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información Básica</h4>
             </div>
                <div className="row" >
                      <div className="col-md-3">
                              <div className="control-group">
                                    <label for="TipoDocumento">Tipo de documento (<span className="field-required">*</span>):</label>
                                    <select name="TipoDocumento" title="Tipo de documento de identidad" className="form-control" id="1" value={this.state.items[1]} onChange={this.handleChange}>
                                      <option>Seleccione...</option>
                                      <option value="1">C&#233;dula de Ciudadan&#237;a</option>
                                      <option value="0">Tarjeta de Identidad</option>
                                      <option value="2">NUIP</option>
                                    </select>
                                    
                              </div>
                      </div>
                      <div className="col-md-3">
                              <div className="control-group">
                                <label for="NumeroDocumento">Número de documento (<span className="field-required">*</span>):</label>
                                <input name="NumeroDocumento" type="text" id="2" value={this.state.items[2]} onChange={this.handleChange} title="Número de documento de identidad" className="form-control" tabIndex="2" />  
                                
                              </div>
                      </div>
                      
                  </div>
                  <div >
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                             <label for="Nombre" >Nombre (<span className="field-required">*</span>):</label>
                             <input name="Nombre" type="text" maxlength="50" id="3" value={this.state.items[3]} onChange={this.handleChange} title="Primer nombre" className="form-control" />
                             
                            </div>
                    </div>
                    
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="Apellido">Apellidos (<span className="field-required">*</span>):</label>
                              <input name="Apellido" type="text" maxlength="50" id="4" value={this.state.items[4]} onChange={this.handleChange} title="Primer apellido" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="ApellidoSeg">Segundo Apellido:</label>
                              <input name="ApellidoSeg" type="text" maxlength="50" id="5" value={this.state.items[5]} onChange={this.handleChange} title="Segundo apellido" className="form-control" />
                              
                            </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="FechaNacimiento">Fecha de Nacimiento (<span className="field-required">*</span>):</label>
                              <input name="FechaNacimiento" type="date" maxlength="50" id="6" value={this.state.items[6]} onChange={this.handleChange} title="Fecha Nacimiento" className="form-control" />
                              
                            </div>
                    </div>  
                     
                    <div className="col-md-6">
                              <div className="control-group">
                                    <label for="HProfesion">Profesión, ocupación u oficio:</label>
                                    <input name="HProfesion" type="text" maxlength="50" id="7" value={this.state.items[7]} onChange={this.handleChange} title="Hermano Profesion" className="form-control" />
                                    
                                </div>
                    </div> 
                             
                  </div>
                </div>
                </div>
                </div>
            <div >
            <div className="Informacion2"> 
            <div className="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información de Residencia</h4>
             </div>
                
                  <div className="row">
                    <div className="col-md-12">
                            <div className="control-group">
                              <label for="PDirecciónR">Dirección de Residencia:</label>
                              <input type="text" className="form-control" id="8" value={this.state.items[8]} onChange={this.handleChange} />
                            </div>
                    </div> 
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                            <div className="control-group">
                              <label for="PPaisR">País de residencia:</label>
                              <input name="PPaisR" type="text" maxlength="50" id="9" value={this.state.items[9]} onChange={this.handleChange} title="Pais de residencia Padre" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-4">
                            <div className="control-group">
                              <label for="PDepartamentoR">Departamento de residencia:</label>
                              <input name="PDepartamentoR" type="text" maxlength="50" id="10" value={this.state.items[10]} onChange={this.handleChange} title="Departamento de residencia Padre" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-4">
                            <div className="control-group">
                              <label for="PMunicipioR">Municipio de residencia:</label>
                              <input name="PMunicipioR" type="text" maxlength="50" id="11" value={this.state.items[11]} onChange={this.handleChange} title="Municipio de residencia Padre" className="form-control" />
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div> 
                  </div>
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
    );
  }
}



export default SiblingInfo;