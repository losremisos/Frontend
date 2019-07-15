import React, { Component } from 'react';
import Users from '../../../assets/defaultUser.png';
import axios from 'axios';
import {Button,Card} from "react-bootstrap";
import ReactFileReader from "react-file-reader";
import ActiveStorageProvider from 'react-activestorage-provider';
import {DirectUpload}  from "activestorage";
import Dropzone from 'react-dropzone';
import defaultUser from "/home/sebastian/Documents/Proyecto_Libreta/Frontend/src/assets/defaultUser.png";


class BasicInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        users: [],
        file: null
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

componentDidMount(){
    let id = localStorage.getItem("UsrID");
    console.log("Aqui esta la peticion");
    console.log(axios({
        method: "GET",
        url: "http://localhost:4200/users/" + id
    }));
    axios({
        method: "GET",
        url: "http://localhost:4200/users/" + id
    }).then((res) => {
        this.setState({
            users: res.data
        })
    });
}

handleFileChange(e){
  this.setState({file: e.target.files[0]})
}

handleFileSubmit(){
  const upload = new DirectUpload(this.state.file, "/rails/active_storage/direct_uploads");

  upload.create((error, blob) => {
    if(error){
      console.log(error)
    } else {
      console.log(blob)
    }
  })
}

hadleUpload = file => {
  let id = localStorage.getItem("UsrID");
  
  /* axios
    .get("http://localhost:4200/users/" + id)
    .then(res => {
      console.log(res, "RESPUESTA");
    })
    .catch(e => {
      console.log(e, "error");
    }); */
 
  axios.put("http://localhost:4200/users/123", {
    "user": {
      avatar: file
    }
  }).then(res => {
      console.log(res, "respuesta");
  }).catch(e => {
      console.log(e, "error");
  });
};

uploadFiles = file => {
  let id = localStorage.getItem("UsrID");
  
  /* axios
    .get("http://localhost:4200/users/" + id)
    .then(res => {
      console.log(res, "RESPUESTA");
    })
    .catch(e => {
      console.log(e, "error");
    }); */
 
  axios.put("http://localhost:4200/documents/1", {
    "document": {
      nombre: "Registro Nacimiento",
      archivo: file,
      user_id: id
    }
  }).then(res => {
      console.log(res, "respuesta");
  }).catch(e => {
      console.log(e, "error");
  });
};

handleFiles = files => {
  console.log(files.base64, "IMAGEN.BASE.64");
  console.log(files.fileList, "IMAGEN.FILELIST");
  
  this.setState({
      files: files.fileList[0],
      loadImage: true
  });
  this.hadleUpload(files.base64);
};
handleFilesPdf = files => {
  console.log(files.base64, "IMAGEN.BASE.64");
  console.log(files.fileList, "IMAGEN.FILELIST");
  
  this.setState({
      files: files.fileList[0],
      loadImage: true
  });
  this.uploadFiles(files.base64);
};

  render() {
    const {users} = this.state;
    console.log("Lo que hay en user del state");
    console.log(users);
    return (
      <div>
        <div class="form-row">
          <div>
            <ReactFileReader
              fileTypes = {[".jpeg", ".png", ".jpg", ".pdf"]}
              base64 = {true}
              multipleFiles ={ false}
              handleFiles = {this.handleFilesPdf}
            >
              <Button type="submit" variant="primary">
                  {'Subir Archivo'}
              </Button>
            </ReactFileReader>
          </div>

          <div class=" mt-5 form-group col-md-3">                         
            <ReactFileReader
                fileTypes = {[".jpeg", ".png", ".jpg", ".pdf"]}
                base64 = {true}
                multipleFiles ={ false}
                handleFiles = {this.handleFilesPdf}
              >
                <Button type="submit" variant="primary">
                    {'Subir Archivo'}
                </Button>
              </ReactFileReader>             
          </div>
            
          {/* Base 64 */}
          <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.loadImage ? URL.createObjectURL(this.state.files):defaultUser} />
                <Card.Body>
                    <ReactFileReader
                        fileTypes = {[".jpeg", ".png", ".jpg"]}
                        base64 = {true}
                        multipleFiles ={ false}
                        handleFiles = {this.handleFiles}
                    >
                        <Button type="submit" variant="primary">
                            {'Subir imagen'}
                        </Button>
                    </ReactFileReader>
                </Card.Body>
            </Card>
          </div> 

          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputState">Tipo de identificación (*):</label>
              <select id="inputState" class="form-control" disabled value={users.tipoDocumento}>
                <option disabled>Seleccione...</option>
                <option value="1">Cedula de Ciudadania</option>
                <option value="2">Tarjeta de Identidad</option>
              </select>
          </div>
          <div class="form-group col-md-3">
            <label for="validationCustom01">Numero de identificación (*):</label>
            <input type="number" class="form-control" id="validationCustom01" disabled placeholder={users.documento} required/>
          </div>
          <div class="form-group col-md-3">
            <label for="validationCustom02">Numero de tarjeta de Identidad:</label>
            <input type="number" class="form-control" id="validationCustom02" />
          </div>
        </div>
          <div className=" mt-5 form-group col-md-3">
            <label>Adjunte documento de identidad (*):</label>
            <div type="button" className="btn div_file">
              <p className="text">Agregar archivo</p>
              <input type="file" className="btn_enviar_1" id="1" name="documentoidentidad" placeholder="Documento de Identidad" accept=".pdf" disabled={this.props.dis}></input>
            </div>
          </div>

          <div className=" mt-5 form-group col-md-3">
            <label>Adjunte fotografia (*):</label>
            <div type="button" className="btn div_file">
              <p className="text">Agregar archivo</p>
              <input type="file" className="btn_enviar_1" id="btn_enviar_03" accept=".jpg,.jpeg,.png" disabled={this.props.dis}></input>
            </div>
          </div>


          <div className="form-group col-md-3">
            <img src={Users} className="img-fluid" alt="logo" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="inputState">Tipo de identificación (*):</label>
            <select id="inputState" className="form-control" id="2" disabled value={this.state.items[2]}>
              <option disabled>Seleccione...</option>
              <option value="1">Cedula de Ciudadania</option>
              <option value="0">Tarjeta de Identidad</option>
              <option value="2">NUIP</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom01">Numero de identificación (*):</label>
            <input type="number" className="form-control" disabled id="3" disabled value={this.state.items[3]}/>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom02">Numero de tarjeta de Identidad:</label>
            <input type="number" className="form-control" name="numberTI" placeholder="Tarjeta Identidad"
              onChange={this.handleChange} id="4" value={this.state.items[4]} disabled={this.props.dis}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="validationCustom03">Nombre (*):</label>
            <input type="text" className="form-control" id="5" disabled value={this.state.items[5]} disabled />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom05">Primer apellido (*):</label>
            <input type="text" className="form-control" id="6" disabled value={this.state.items[6]} disabled />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom06">Segundo apellido:</label>
            <input type="text" className="form-control" id="7" disabled value={this.state.items[7]} disabled />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="validationCustom07">Fecha de nacimiento (*):</label>
            <input type="date" className="form-control" name="fechanacimiento" placeholder="Fecha de Nacimiento"
              onChange={this.handleChange} id="8" value={this.state.items[8]} disabled={this.props.dis}/>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom08">Pais de nacimiento (*):</label>
            <input type="text" className="form-control" name="paisnacimiento" placeholder="Pais de Nacimiento"
              onChange={this.handleChange} id="9" value={this.state.items[9]} disabled={this.props.dis} />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom09">Departamento de nacimiento (*):</label>
            <input type="text" className="form-control" id="10" onChange={this.handleChange} value={this.state.items[10]} disabled={this.props.dis}/>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom10">Municipio de nacimiento (*):</label>
            <input type="text" className="form-control" id="11" onChange={this.handleChange} value={this.state.items[11]} disabled={this.props.dis} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="validationCustom11">Fecha de expedicion del documento de identidad (*):</label>
            <input type="date" className="form-control" name="fechexdoc" placeholder="Fecha de Expedicion del Documento"
              onChange={this.handleChange} id="12" value={this.state.items[12]} disabled={this.props.dis}/>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom12">Pais del expedición del documento de identidad (*):</label>
            <input type="text" className="form-control" name="paisexdoc" placeholder="Pais de Expedicion del Documento"
              onChange={this.handleChange} id="13" value={this.state.items[13]} disabled={this.props.dis}/>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom13">Departamento de expedición del documento de identidad (*):</label>
            <input type="text" className="form-control" name="depexdoc" placeholder="Departamento de Expedicion del Documento"
              onChange={this.handleChange} id="14" value={this.state.items[14]} disabled={this.props.dis} />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom14">Municipio de expedición del documento de identidad (*):</label>
            <input type="text" className="form-control" name="munexdoc" placeholder="Municipio de Expedicion del Documento"
              onChange={this.handleChange} id="15" value={this.state.items[15]} disabled={this.props.dis} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="inputState01">Genero (*):</label>
            <select className="form-control" name="Genero" placeholder="Genero"
              onChange={this.handleChange} id="16" value={this.state.items[16]} disabled={this.props.dis}>
              <option disabled selected>Seleccione...</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              <option value="3">Transgénero</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="inputState02">Nacionalidad (*):</label>
            <select className="form-control" name="Nacionalidad" placeholder="Nacionalidad"
              onChange={this.handleChange} id="17" value={this.state.items[17]} disabled={this.props.dis}>
              <option disabled selected>Seleccione...</option>
              <option value="1">Colombiano</option>
              <option value="2">Doble Nacionalidad</option>
              <option value="3">Extranjero</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom04">Ciudadano con doble nacionalidad (*):</label>
            <select className="form-control" name="2Nacionalidad" placeholder="Doble Nacionalidad"
              onChange={this.handleChange} id="18" value={this.state.items[18]} disabled={this.props.dis}>
              <option disabled selected>Seleccione...</option>
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom04">Ciudadano Colombiano retornado del exterior (*):</label>
            <select className="form-control" name="retornadoExterior" placeholder="Retornado del Exterior"
              onChange={this.handleChange} id="19" value={this.state.items[19]} disabled={this.props.dis}>
              <option disabled selected>Seleccione...</option>
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="validationCustom15">Correo electronico (*):</label>
            <input type="email" className="form-control" disabled id="20" value={this.state.items[20]} disabled={this.props.dis}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label for="inputState05"><strong>Exenciones de ley y causales de aplazamiento (*):</strong></label>
            <p>
              (En este listado además de las exenciones que aparecen en la Ley 48, aparecen unas causales de aplazamiento, como ser hermano de quien esté prestando servicio militar) Privilegio que lo exime para la prestación del servicio militar, previa verificación por las autoridades competentes.
Una exención es un privilegio que lo exime para la prestación del servicio militar, además debe revisar el siguiente listado si cumple con alguno de los casos de aplazamiento de su proceso de definición de la situación militar, previa verificación por las autoridades competentes.
            </p>
            <select className="form-control" name="exenciones" placeholder="Exenciones de ley y causales de aplazamiento"
              onChange={this.handleChange} id="21" value={this.state.items[21]} disabled={this.props.dis}>
              <option selected>Seleccione...</option>
              <option value="0">Ninguna</option>
              <option value="1">Beneficiario de la ley 1448 Junio 10 del 2011 (Ley de victimas)</option>
              <option value="2">Condenados a penas que tengan como asesorias la pérdida de los derechos políticos mientras no obtenga su rehabilitacion</option>
              <option value="3">El hijo único, hombre o mujer</option>
              <option value="4">Los hijos de oficiales, suboficiales, soldados e infantes de marina profesionales, agentes, nivel ejecutivo y de la Fuerza Publica que hallan fallecido o que los organismos y autoridades medico-militar o de la policia hayan declarado su invalidez en combate o en actos del servicio....</option>
              <option value="5">Hermano o hijo de quien haya muerto o adquirido una inhabilidad absoluta y permanente en combate, en actos del servicio o como consecuencia del mismo durante la presentacion del servicio militar obligatorio, a menos, que siendo apto, voluntariamente quiera prestarlo</option>
              <option value="6">Hijo de padres incapacitados para trabajar o mayores de 60 años, cuando estos carezcan de renta, pension o medios de subsistencia, siempre que dicho hijo vele por ellos</option>
              <option value="7">Huérfano de padre o madre que atienda con su trabajo a la subsistencia de sus hermanos incapaces de ganarse el sustento</option>
              <option value="8">Los casados que hagan vida conyugal</option>
              <option value="9">Es clerigo o Religioso</option>
              <option value="10">Los indigenas que acrediten su identidad cultural, social y ecónomica</option>
              <option value="11">Es desmovilizado</option>
              <option value="12">Ciudadano es aspirante a ingresar a las escuelas de formacion de Oficiales, Suboficiales y Agentes</option>
              <option value="13">Ciudadano con hermanos prestando servicio militar</option>
              <option value="14">Quienes acrediten la existencia de union marital de hecho legalmente declarada</option>
              <option value="15">Las personas en situacion de discapacidadfísic, psiquica, o sensorial permanente</option>
              <option value="16">Los varones colombianos que después de si inscripcion hayan dejado de tener el componente de sexo masculino en su registro civil</option>
              <option value="17">Los ciudadanos incluidos en el programa de proteccion a victimas y testigos de Fiscalia General de la Nación</option>
              <option value="18">Los ciudadanos objetores de conciencia</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
