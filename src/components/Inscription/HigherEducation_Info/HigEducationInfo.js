import React, { Component } from 'react';
import {Button,Card} from "react-bootstrap";
import ReactFileReader from "react-file-reader";
import noFile from '../../../assets/nofile.png';

class HigherEducationInfo extends Component {

constructor(props) {
  super(props);
  this.state = {
    users: [],
    items: [],
    firstload : true,
    display: 'none',
    checked: false,
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

handleCheckboxChange = event => {
    if (this.state.display === 'none') {
        this.setState({ display: 'block' });
    } else {
        this.setState({ display: 'none' });
    }
    let newitem = this.state.items;
    newitem[parseInt(event.target.id, 10)] = event.target.checked;
    this.setState({ checked: event.target.checked, items:newitem });
}
  render() {
    if(this.state.firstload===true && this.props.load===true){
      let info = this.props.information[3]
      this.setState({items:info , firstload:false, confirmar:true})
      if(info[0]===true){
          this.setState({checked:true, display: 'block'})
      }else{
        info[0]=false;
      }
    }
    console.log(this.props.submit);
      
    if (this.props.submit === "1" && this.state.confirmar===true) {

      console.log(this.state.items);
      this.props.information[3] = this.state.items;
      this.props.getDatos(this.props.information);
      this.setState({firstload:true, confirmar:false})
    }
    let img = this.state.items[6];
    let base64 = 'data:image/png;base64' + img;
    if(img=="" || img==null){
      base64 = noFile;
    }
    return (
      <div>
          
          <div className="row">
                        <div className="row">
                            <div className="col-md-2">
                                <label><input type="checkbox" id="0" 
                                    checked={this.state.checked}
                                    onChange={this.handleCheckboxChange} disabled={this.props.dis}/>¿Cursa o ha cursado algún estudio de educación superior?</label>
                            </div>
                        </div>

                    </div>
<div style={{display:this.state.display}}>
            <div className="form-row">
              <div className="form-group col-md-3">
              <label for="inputState55">Modalidad académica  (*)</label>
              <select id="1" className="form-control" value={this.state.items[1]} onChange={this.handleChange} disabled={this.props.dis}>
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
                <input type="text" className="form-control" id="2" value={this.state.items[2]} onChange={this.handleChange} disabled={this.props.dis}/>
              </div>
              <div className="form-group col-md-3">
                    <div className="form-row"> 
                        <div className="form-group col-md-6">
                            <label for="inputState56">Semestre (*)</label>
                            <select id="3" className="form-control" value={this.state.items[3]} onChange={this.handleChange} disabled={this.props.dis}>
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
                            <select id="4" className="form-control" value={this.state.items[4]} onChange={this.handleChange} disabled={this.props.dis}>
                                <option selected disabled>Seleccione...</option>
                                <option value = "false">No</option>
                                <option value = "true">Si</option>                                 </select> 
                        </div>
                    </div>
                </div>  
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                
              </div>

              <div className="form-group col-md-6">
                <label for="validationCustom68">Institución educativa donde cursó el último año:</label>
                <input type="text" className="form-control" id="5" value={this.state.items[5]} onChange={this.handleChange} disabled={this.props.dis}/>
              </div>
              
              
              <div className="form-group col-md-3">
              <div className="card ">
              <img className="card-img-top" src={base64} alt="algo"/> 
  <div className="card-body">
                  <label>Adjunte certificado de estudios (*):</label>
                  <ReactFileReader id = "6" fileTypes = {[".jpeg", ".png", ".jpg", ".pdf"]} base64 = {true} multipleFiles ={ false} handleFiles = {this.handleFiles}>
                  <Button disabled={this.props.dis} id = "6" onClick={this.getId} variant="primary">{'Agregar Archivo'}</Button></ReactFileReader>

              </div>
              </div>
</div>
            </div>
</div>
            
            



                     
          
      </div>
    );
  }
}

export default HigherEducationInfo;
