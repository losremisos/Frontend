import React, { Component } from 'react';
import Users from '../../../assets/defaultUser.png';
import axios from 'axios';


class BasicInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let items = [...this.state.items];
    let item = { ...items[parseInt(event.target.id, 10)] };
    item.value = event.target.value;
    items[parseInt(event.target.id, 10)] = item;
    this.setState({ items });
  }

  componentDidMount() {
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

  render() {
    if (this.props.submit === "1") {
      this.props.information[0] = this.state.items;
      this.props.getDatos(this.props.information);
    }
    const { users } = this.state;
    console.log("Lo que hay en user del state");
    console.log(users);

    return (
      <div>

        <div className="form-row">

          <div className=" mt-5  form-group col-md-3">
            <label>Adjunte Registro civil de nacimiento (*):</label>
            <div type="button" className="btn div_file">
              <p className="text">Agregar archivo</p>
              <input type="file" className="btn_enviar_1" id="0" name="registrocivil" placeholder="Registro Civil" accept=".pdf"></input>
            </div>
          </div>

          <div className=" mt-5 form-group col-md-3">
            <label>Adjunte documento de identidad (*):</label>
            <div type="button" className="btn div_file">
              <p className="text">Agregar archivo</p>
              <input type="file" className="btn_enviar_1" id="1" name="documentoidentidad" placeholder="Documento de Identidad" accept=".pdf"></input>
            </div>
          </div>

          <div className=" mt-5 form-group col-md-3">
            <label>Adjunte fotografia (*):</label>
            <div type="button" className="btn div_file">
              <p className="text">Agregar archivo</p>
              <input type="file" className="btn_enviar_1" id="btn_enviar_03" accept=".jpg,.jpeg,.png"></input>
            </div>
          </div>


          <div className="form-group col-md-3">
            <img src={Users} className="img-fluid" alt="logo" />
          </div>
        </div>


        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="inputState">Tipo de identificación (*):</label>
            <select id="inputState" className="form-control" disabled value={users.tipoDocumento}>
              <option disabled>Seleccione...</option>
              <option value="1">Cedula de Ciudadania</option>
              <option value="0">Tarjeta de Identidad</option>
              <option value="2">NUIP</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom01">Numero de identificación (*):</label>
            <input type="number" className="form-control" id="validationCustom01" disabled placeholder={users.documento} />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom02">Numero de tarjeta de Identidad:</label>
            <input type="number" className="form-control" id="2" name="numberTI" placeholder="Tarjeta Identidad"
              onChange={this.handleChange} />
          </div>
        </div>


        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="validationCustom03">Primer nombre (*):</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder={users.nombre} disabled />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom05">Primer apellido (*):</label>
            <input type="text" className="form-control" id="validationCustom05" placeholder={users.primerApellido} disabled />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom06">Segundo apellido:</label>
            <input type="text" className="form-control" id="validationCustom06"
              placeholder={users.segundoApellido} disabled />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="validationCustom07">Fecha de nacimiento (*):</label>
            <input type="date" className="form-control" id="3" name="fechanacimiento" placeholder="Fecha de Nacimiento"
              onChange={this.handleChange} />

          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom08">Pais de nacimiento (*):</label>
            <input type="text" className="form-control" id="4" name="paisnacimiento" placeholder="Pais de Nacimiento"
              onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom09">Departamento de nacimiento (*):</label>
            <input type="text" className="form-control" id="validationCustom09" placeholder={users.departamento} disabled />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom10">Municipio de nacimiento (*):</label>
            <input type="text" className="form-control" id="validationCustom10" placeholder={users.ciudad} disabled />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="validationCustom11">Fecha de expedicion del documento de identidad (*):</label>
            <input type="date" className="form-control" id="5" name="fechexdoc" placeholder="Fecha de Expedicion del Documento"
              onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom12">Pais del expedición del documento de identidad (*):</label>
            <input type="text" className="form-control" id="6" name="paisexdoc" placeholder="Pais de Expedicion del Documento"
              onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom13">Departamento de expedición del documento de identidad (*):</label>
            <input type="text" className="form-control" id="7" name="depexdoc" placeholder="Departamento de Expedicion del Documento"
              onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom14">Municipio de expedición del documento de identidad (*):</label>
            <input type="text" className="form-control" id="8" name="munexdoc" placeholder="Municipio de Expedicion del Documento"
              onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="inputState01">Genero (*):</label>
            <select className="form-control" id="9" name="Genero" placeholder="Genero"
              onChange={this.handleChange}>
              <option disabled selected>Seleccione...</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              <option value="3">Transgénero</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="inputState02">Nacionalidad (*):</label>
            <select className="form-control" id="10" name="Nacionalidad" placeholder="Nacionalidad"
              onChange={this.handleChange}>
              <option disabled selected>Seleccione...</option>
              <option value="1">Colombiano</option>
              <option value="2">Doble Nacionalidad</option>
              <option value="3">Extranjero</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom04">Ciudadano con doble nacionalidad (*):</label>
            <select className="form-control" id="11" name="2Nacionalidad" placeholder="Doble Nacionalidad"
              onChange={this.handleChange}>
              <option disabled selected>Seleccione...</option>
              <option value="1">No</option>
              <option value="2">Si</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label for="validationCustom04">Ciudadano Colombiano retornado del exterior (*):</label>
            <select className="form-control" id="12" name="retornadoExterior" placeholder="Retornado del Exterior"
              onChange={this.handleChange}>
              <option disabled selected>Seleccione...</option>
              <option value="1">No</option>
              <option value="2">Si</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="validationCustom15">Correo electronico (*):</label>
            <input type="email" className="form-control" id="validationCustom15" disabled placeholder={users.email} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label for="inputState05"><strong>Exenciones de ley y causales de aplazamiento (*):</strong></label>
            <p>
              (En este listado además de las exenciones que aparecen en la Ley 48, aparecen unas causales de aplazamiento, como ser hermano de quien esté prestando servicio militar) Privilegio que lo exime para la prestación del servicio militar, previa verificación por las autoridades competentes.
Una exención es un privilegio que lo exime para la prestación del servicio militar, además debe revisar el siguiente listado si cumple con alguno de los casos de aplazamiento de su proceso de definición de la situación militar, previa verificación por las autoridades competentes.
                </p>
            <select className="form-control" id="13" name="exenciones" placeholder="Exenciones de ley y causales de aplazamiento"
              onChange={this.handleChange}>
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
