import React, { Component } from 'react';
import './../Family_Info_Components/Familiar';

class Working_Info extends Component {

      constructor(props) {
        super(props);
        this.state = {
          users: [],
          items: [],
          firstload : true,
          display: 'none',
          checked: false
        }
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        let newitem = this.state.items;
        newitem[parseInt(event.target.id, 10)] = event.target.value;
        this.setState({ items:newitem });
      }
        
    handleCheckboxChange = event =>{
        if(this.state.display==='none'){
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
        let info = this.props.information[4]
        this.setState({items:info , firstload:false})
        if(info[0]===true){
            this.setState({checked:true, display: 'block'})
        }
      }
      console.log(this.props.submit);
        
      if (this.props.submit === "1") {
  
        console.log(this.state.items);
        this.props.information[4] = this.state.items;
        this.props.getDatos(this.props.information);
        this.setState({firstload:true})
      }
        return (
        <div>
            <div className="row">
                    <div className="col-md-2">
                    <label><input type="checkbox" id="0" 
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
                                <input name="PProfesion" type="text" maxLength="50" id="1" title="Profesión, ocupación u oficio Padre" className="form-control" tabIndex="2" value={this.state.items[1]} onChange={this.handleChange}/>  
                       </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="control-group">
                                <label for="PEmpresa">Empresa en la que labora (<span className="field-required">*</span>):</label>
                                <input name="PEmpresa" type="text" maxlength="50" id="2" title="Empresa en la que labora" className="form-control" tabIndex="2" value={this.state.items[2]} onChange={this.handleChange} />  
                                
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-6"> 
                        <div className="control-group">
                                <label for="PCargo">Cargo (<span className="field-required">*</span>):</label>
                                <input name="PCargo" type="text" maxlength="50" id="3" title="Cargo Padre" className="form-control" tabIndex="2" value={this.state.items[3]} onChange={this.handleChange}/>  
                                
                        </div>
                    </div>
                    <div className="col-md-3">
                              <div className="control-group">
                                    <label for="PTipoTrabajador">Tipo de trabajador (<span className="field-required">*</span>):</label>
                                    <select name="PTipoTrabajador" title="Tipo de trabajador Padre"  className="form-control" tabIndex="1" >
                                      <option selected="selected" id="4" value={this.state.items[4]} onChange={this.handleChange}>Seleccione...</option>
                                      <option value="1">Empleado</option>
                                      <option value="2">Independiente</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div>
                    <div className="col-md-3"> 
                        <div className="control-group">
                                <label for="PFechaIngreso">Fecha de ingreso (<span className="field-required">*</span>):</label>
                                <input name="PFechaIngreso" type="date" maxlength="50" id="5" title="Fecha de ingreso Padre" className="form-control" tabIndex="2" value={this.state.items[5]} onChange={this.handleChange}/>  
                                
                        </div>
                    </div>
                </div>
                                  
                  <div className="row">
                    <div className="col-md-12">
                            <div className="control-group">
                              <label for="PDirecciónR">Dirección de Empresa:</label>
                              <input type="text" className="form-control" id="6"  value={this.state.items[6]} onChange={this.handleChange}/>
                            </div>
                    </div> 
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PPaisR">País de empresa (<span className="field-required">*</span>):</label>
                              <input name="PPaisR" type="text" maxlength="50" id="7" title="Pais de residencia Padre" className="form-control" value={this.state.items[7]} onChange={this.handleChange}/>
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PDepartamentoR">Departamento de empresa (<span className="field-required">*</span>):</label>
                              <input name="PDepartamentoR" type="text" maxlength="50" id="8" title="Departamento de residencia Padre" className="form-control" value={this.state.items[8]} onChange={this.handleChange}/>
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PMunicipioR">Municipio de empresa (<span className="field-required">*</span>):</label>
                              <input name="PMunicipioR" type="text" maxlength="50" id="9" title="Municipio de residencia Padre" className="form-control" value={this.state.items[9]} onChange={this.handleChange}/>
                              <span >&nbsp;&nbsp;&nbsp;</span>
                            </div>
                    </div> 
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PTelefono">Teléfono de la empresa:</label>
                              <input name="PTelefono" type="text" maxlength="10" id="10" title="Telefono de contacto: Padre" className="form-control" value={this.state.items[10]} onChange={this.handleChange}/>
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