import React, { Component } from 'react';
import '../Family_Info_Components/Familiar';
import  InfoTrabajo  from '../Family_Info_Components/infoTrabajo';
import {Button,Card} from "react-bootstrap";
import ReactFileReader from "react-file-reader";
import noFile from '../../../assets/nofile.png';

class FatherInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      items: [],
      firstload : true,
      display: 'none',
      checked: false,
      checked1: false,
      confirmar: true,
      idfile: "",
      file: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.getId = this.getId.bind(this);
  }
  getId(event){
    this.state.idfile = event.target.id;
    console.log(event.target);
  }
  handleChange(event) {
    let newitem = this.state.items;
    newitem[parseInt(event.target.id, 10)] = event.target.value;
    this.setState({ items:newitem });
  }
  handleFiles = files => {
    let newitem = this.state.items;
    newitem[parseInt(this.state.idfile, 10)] = files.base64;
    this.setState({ items:newitem });
  };

  onChange = () => {
    if(this.state.display==='none' ){
      this.setState({ display: 'block' });
    }else{
    this.setState({ display: 'none' });
    }
 }
  handleCheckboxChange = event =>{
    let newitem = this.state.items;
    newitem[parseInt(event.target.id, 10)] = event.target.checked;
    this.setState({ checked: event.target.checked, items:newitem });
  }
  handleCheckboxChange1 = event =>{
    if(this.state.display==='none'){
        this.setState({ display: 'block' });
      }else{
      this.setState({ display: 'none' });
      }
      let newitem = this.state.items;
      newitem[parseInt(event.target.id, 10)] = event.target.checked;
      this.setState({ checked1: event.target.checked, items:newitem });
 }
  render() {
    if(this.state.firstload===true && this.props.load===true){
      let info = this.props.information[this.props.form]
      this.setState({items:info , firstload:false, confirmar:true})
      if(info[15]===true){
          this.setState({checked1:true, display: 'block'})
      }else{
        info[15]=false;
      }
      if(info[9]===true){
        this.setState({checked:true})
      }else{
        info[9]=false;
      }
    }
    console.log(this.props.submit);
      
    if (this.props.submit === "1" && this.state.confirmar===true) {

      console.log(this.state.items);
      this.props.information[this.props.form] = this.state.items;
      this.props.getDatos(this.props.information);
      this.setState({firstload:true, confirmar:false})
    }
    let img = this.state.items[8];
    let base64 = 'data:image/png;base64' + img;
    if(img=="" || img==null){
      base64 = noFile;
    }
    return (
      <div>
        
        
        <div className="App-head App">
        <div className="container">
        <div className="Informacion2"> 
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
                                    <select name="TipoDocumento" title="Tipo de documento de identidad" disabled={this.props.dis} id="0" value={this.state.items[0]} onChange={this.handleChange} className="form-control" tabIndex="1">
                                      <option>Seleccione...</option>
                                      <option value="1">C&#233;dula de Ciudadan&#237;a</option>
                                      <option value="0">Tarjeta de Identidad</option>
                                      <option value="2">NUIP</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                      <div className="col-md-3">
                              <div className="control-group">
                                <label for="NumeroDocumento">Número de documento (<span className="field-required">*</span>):</label>
                                <input name="NumeroDocumento" type="text" disabled={this.props.dis} maxlength="11" id="1" value={this.state.items[1]} onChange={this.handleChange} title="Número de documento de identidad" className="form-control" tabIndex="2" />  
                                
                              </div>
                      </div>
              
                  </div>
                  <div>
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                             <label for="Nombre" >Nombre (<span className="field-required">*</span>):</label>
                             <input name="Nombre" type="text" disabled={this.props.dis} maxlength="50" id="2" value={this.state.items[2]} onChange={this.handleChange}title="Primer nombre" className="form-control" />
                             
                            </div>
                    </div>
                    
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="Apellido">Apellidos (<span className="field-required">*</span>):</label>
                              <input name="Apellido" type="text" disabled={this.props.dis} maxlength="50" id="3" value={this.state.items[3]} onChange={this.handleChange} title="Primer apellido" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="ApellidoSeg">Segundo Apellido:</label>
                              <input name="ApellidoSeg" type="text" disabled={this.props.dis} maxlength="50" id="4" value={this.state.items[4]} onChange={this.handleChange} title="Segundo apellido" className="form-control" />
                              
                            </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="FechaNacimiento">Fecha de Nacimiento (<span className="field-required">*</span>):</label>
                              <input name="FechaNacimiento" type="date" disabled={this.props.dis} maxlength="50" id="5" value={this.state.items[5]} onChange={this.handleChange} title="Fecha Nacimiento" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                              <div className="control-group">
                                    <label for="PadreVive">Vive (<span className="field-required">*</span>):</label>
                                    <select name="PadreVive" title="Padre Vive" disabled={this.props.dis} id="6" value={this.state.items[6]} onChange={this.handleChange} className="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="true">Si</option>
                                      <option value="false">No</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div> 
                    <div className="col-md-3">
                              <div className="control-group">
                                    <label for="PadreEstadoCivil">Estado Civil (<span className="field-required">*</span>):</label>
                                    <select name="PadreEstadoCivil" title="Estado Civil Padre" disabled={this.props.dis} id="7" value={this.state.items[7]} onChange={this.handleChange} className="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">Soltero</option>
                                      <option value="2">Casado</option>
                                      <option value="3">Divorciado</option>
                                      <option value="4">Viudo</option>
                                      <option value="5">Union Libre</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div> 
                    <div className="col-md-3">
                              <div className="control-group">
                              <div className="card ">
  <img className="card-img-top" src={base64} alt="algo"/> 
  <div className="card-body">
                                    <label for="PadreArchivo">Adjunte el documento de identidad(<span className="field-required">*</span>):</label>
                                    <ReactFileReader id = "8" fileTypes = {[".jpeg", ".png", ".jpg", ".pdf"]} base64 = {true} multipleFiles ={ false} handleFiles = {this.handleFiles}>
                                  <Button disabled={this.props.dis} id = "8" onClick={this.getId} variant="primary">{'Agregar Archivo'}</Button></ReactFileReader>
                                  </div>
</div>
                                    </div>
                    </div>             
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                    <label><input type="checkbox" id="CedulaMilitar" checked={this.state.checked}
                        onChange={this.handleCheckboxChange} id="9" disabled={this.props.dis} />¿Tiene Cédula Militar?</label>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            <div>
            <div className="Informacion2"> 
            <div className="Pantalla">
            <div style={{textAlign: "left" }}>
              <h4>Información de Residencia</h4>
             </div>
                
                  
                  
                  <div className="row">
                    <div className="col-md-12">
                            <div className="control-group">
                              <label for="PDirecciónR">Dirección de Residencia:</label>
                              <input type="text" className="form-control" disabled={this.props.dis} id="10" value={this.state.items[10]} onChange={this.handleChange}/>
                            </div>
                    </div> 
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PPaisR">País de residencia (<span className="field-required">*</span>):</label>
                              <input name="PPaisR" type="text" disabled={this.props.dis} maxlength="50" id="11" value={this.state.items[11]} onChange={this.handleChange} title="Pais de residencia Padre" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PDepartamentoR">Departamento de residencia (<span className="field-required">*</span>):</label>
                              <input name="PDepartamentoR" type="text" disabled={this.props.dis} maxlength="50" id="12" value={this.state.items[12]} onChange={this.handleChange} title="Departamento de residencia Padre" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PMunicipioR">Municipio de residencia (<span className="field-required">*</span>):</label>
                              <input name="PMunicipioR" type="text" disabled={this.props.dis} maxlength="50" id="13" value={this.state.items[13]} onChange={this.handleChange} title="Municipio de residencia Padre" className="form-control" />
                              
                            </div>
                    </div> 
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PTelefono">Teléfono de contacto:</label>
                              <input name="PTelefono" type="text" disabled={this.props.dis} maxlength="10" id="14" value={this.state.items[14]} onChange={this.handleChange} title="Telefono de contacto: Padre" className="form-control" />
                              
                            </div>
                    </div>             
                  </div>
                </div>
                </div>
                <div>
            <div className="row">
                    <div className="col-md-2">
                    <label><input type="checkbox" id="TrabajaActual" 
                        checked={this.state.checked1}
                        onChange={this.handleCheckboxChange1} disabled={this.props.dis} id="15"/>¿Trabaja Actualmente?</label>
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
                                <input name="PProfesion" type="text" disabled={this.props.dis} maxlength="50" id="16" value={this.state.items[16]} onChange={this.handleChange} title="Profesión, ocupación u oficio Padre" className="form-control" tabIndex="2" />  
                                
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="control-group">
                                <label for="PEmpresa">Empresa en la que labora (<span className="field-required">*</span>):</label>
                                <input name="PEmpresa" type="text" disabled={this.props.dis} maxlength="50" id="17" value={this.state.items[17]} onChange={this.handleChange} title="Empresa en la que labora" className="form-control" tabIndex="2" />  
                                
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-6"> 
                        <div className="control-group">
                                <label for="PCargo">Cargo (<span className="field-required">*</span>):</label>
                                <input name="PCargo" type="text" disabled={this.props.dis} maxlength="50" id="18" value={this.state.items[18]} onChange={this.handleChange} title="Cargo Padre" className="form-control" tabIndex="2" />  
                                
                        </div>
                    </div>
                    <div className="col-md-3">
                              <div className="control-group">
                                    <label for="PTipoTrabajador">Tipo de trabajador (<span className="field-required">*</span>):</label>
                                    <select name="PTipoTrabajador" disabled={this.props.dis} title="Tipo de trabajador Padre" id="19" value={this.state.items[19]} onChange={this.handleChange} className="form-control" tabIndex="1">
                                      <option selected="selected" value="-1">Seleccione...</option>
                                      <option value="1">Empleado</option>
                                      <option value="2">Independiente</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                    </div>
                    <div className="col-md-3"> 
                        <div className="control-group">
                                <label for="PFechaIngreso">Fecha de ingreso (<span className="field-required">*</span>):</label>
                                <input name="PFechaIngreso"  disabled={this.props.dis} type="date" maxlength="50" id="20" value={this.state.items[20]} onChange={this.handleChange} title="Fecha de ingreso Padre" className="form-control" tabIndex="2" />  
                                
                        </div>
                    </div>
                </div>
                

                  <div className="row">
                    <div className="col-md-12">
                            <div className="control-group">
                              <label for="PDirecciónR">Dirección de Empresa:</label>
                              <input type="text" className="form-control" disabled={this.props.dis} id="21" value={this.state.items[21]} onChange={this.handleChange}/>
                            </div>
                    </div> 
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PPaisR">País de empresa (<span className="field-required">*</span>):</label>
                              <input name="PPaisR" type="text" disabled={this.props.dis} maxlength="50" id="22" value={this.state.items[22]} onChange={this.handleChange} title="Pais de residencia Padre" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PDepartamentoR">Departamento de empresa (<span className="field-required">*</span>):</label>
                              <input name="PDepartamentoR" type="text" disabled={this.props.dis} maxlength="50" id="23" value={this.state.items[23]} onChange={this.handleChange} title="Departamento de residencia Padre" className="form-control" />
                              
                            </div>
                    </div>  
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PMunicipioR">Municipio de empresa (<span className="field-required">*</span>):</label>
                              <input name="PMunicipioR" type="text" disabled={this.props.dis} maxlength="50" id="24" value={this.state.items[24]} onChange={this.handleChange} title="Municipio de residencia Padre" className="form-control" />
                              
                            </div>
                    </div> 
                    <div className="col-md-3">
                            <div className="control-group">
                              <label for="PTelefono">Teléfono de la empresa:</label>
                              <input name="PTelefono" type="text" disabled={this.props.dis} maxlength="10" id="25" value={this.state.items[25]} onChange={this.handleChange} title="Telefono de contacto: Padre" className="form-control" />
                              
                            </div>
                    </div>             
                  </div>
                </div>
                </div>
                </div></div>
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
    );
  }
}



export default FatherInfo;
