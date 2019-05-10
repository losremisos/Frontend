import React, { Component } from 'react';
import Users from './../../assets/defaultUser.png';


class Person extends Component {
  render() {
    return (
      <div>

            <div class="form-row">

              <div class=" mt-5  form-group col-md-3">                         
                <label>Adjunte Registro civil de nacimiento (*):</label>
                  <div type="button" class="btn div_file">
                    <p class="text">Agregar archivo</p>
                    <input type="file" class="btn_enviar_1" id="btn_enviar_01" accept=".pdf" required></input>
                  </div>                
              </div>

              <div class=" mt-5 form-group col-md-3">                         
                <label>Adjunte documento de identidad (*):</label>
                  <div type="button" class="btn div_file">
                    <p class="text">Agregar archivo</p>
                    <input type="file" class="btn_enviar_1" id="btn_enviar_02" accept=".pdf" required></input>
                  </div>                
              </div>
              
              <div class=" mt-5 form-group col-md-3">                         
                <label>Adjunte fotografia (*):</label>
                  <div type="button" class="btn div_file">
                    <p class="text">Agregar archivo</p>
                    <input type="file" class="btn_enviar_1" id="btn_enviar_03" accept=".jpg,.jpeg,.png" required></input>
                  </div>                
              </div>


              <div class="form-group col-md-3">
                <img src={Users} className="img-fluid" alt="logo" />  
              </div>                         
            </div>

          
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="inputState">Tipo de identificación (*):</label>
                <select id="inputState" class="form-control">
                  <option selected>Seleccione...</option>
                  <option>Cedula de Ciudadania</option>
                  <option>Tarjeta de Identidad</option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom01">Numero de identificación (*):</label>
                <input type="number" class="form-control" id="validationCustom01"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom02">Numero de tarjeta de Identidad:</label>
                <input type="number" class="form-control" id="validationCustom02"/>
              </div>
            </div>


            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="validationCustom03">Primer nombre (*):</label>
                <input type="text" class="form-control" id="validationCustom03"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom04">Segundo nombre (*):</label>
                <input type="text" class="form-control" id="validationCustom04" required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom05">Primer apellido (*):</label>
                <input type="text" class="form-control" id="validationCustom05"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom06">Segundo apellido:</label>
                <input type="text" class="form-control" id="validationCustom06" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="validationCustom07">Fecha de nacimiento (*):</label>
                <input type="text" class="form-control" id="validationCustom07"  required/>                


              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom08">Pais de nacimiento (*):</label>
                <input type="text" class="form-control" id="validationCustom08"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom09">Departamento de nacimiento (*):</label>
                <input type="text" class="form-control" id="validationCustom09"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom10">Municipio de nacimiento (*):</label>
                <input type="text" class="form-control" id="validationCustom10"  required/>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="validationCustom11">Fecha de expedicion del documento de identidad (*):</label>
                <input type="text" class="form-control" id="validationCustom11"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom12">Pais del expedición del documento de identidad (*):</label>
                <input type="text" class="form-control" id="validationCustom12"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom13">Departamento de expedición del documento de identidad (*):</label>
                <input type="text" class="form-control" id="validationCustom13"  required/>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom14">Municipio de expedición del documento de identidad (*):</label>
                <input type="text" class="form-control" id="validationCustom14"  required/>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="inputState01">Genero (*):</label>
                <select id="inputState01" class="form-control" required>
                  <option selected>Seleccione...</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Transgenero</option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="inputState02">Nacionalidad (*):</label>
                <select id="inputState02" class="form-control" required>
                  <option selected>Seleccione...</option>
                  <option>Colombiano</option>
                  <option>Doble Nacionalidad</option>
                  <option>Extranjero</option>
                </select>
              </div> 
              <div class="form-group col-md-3">
                <label for="validationCustom04">Ciudadano con doble nacionalidad (*):</label>
                <select id="inputState03" class="form-control" required>
                  <option selected>Seleccione...</option>
                  <option>No</option>
                  <option>Si</option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom04">Ciudadano Colombiano retornado del exterior (*):</label>
                <select id="inputState04" class="form-control" required>
                  <option selected>Seleccione...</option>
                  <option>No</option>
                  <option>Si</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="validationCustom15">Correo electronico (*):</label>
                <input type="email" class="form-control" id="validationCustom15"  required/>
              </div>                         
            </div>

            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputState05"><strong>Exenciones de ley y causales de aplazamiento (*):</strong></label>
                <p>
                (En este listado además de las exenciones que aparecen en la Ley 48, aparecen unas causales de aplazamiento, como ser hermano de quien esté prestando servicio militar) Privilegio que lo exime para la prestación del servicio militar, previa verificación por las autoridades competentes.
Una exención es un privilegio que lo exime para la prestación del servicio militar, además debe revisar el siguiente listado si cumple con alguno de los casos de aplazamiento de su proceso de definición de la situación militar, previa verificación por las autoridades competentes.
                </p>
                <select id="inputState05" class="form-control">
                  <option selected>Seleccione...</option>
                  <option>Ninguna</option>
                  <option>Beneficiario de la ley 1448 Junio 10 del 2011 (Ley de victimas)</option>
                  <option>condenados a penas que tengan como asesorias la pérdida de los derechos políticos mientras no obtenga su rehabilitacion</option>
                  <option>El hijo único, hombre o mujer</option>
                  <option>Los hijos de oficiales, suboficiales, soldados e infantes de marina profesionales, agentes, nivel ejecutivo y de la Fuerza Publica que hallan fallecido o que los organismos y autoridades medico-militar o de la policia hayan declarado su invalidez en combate o en actos del servicio....</option>
                  <option>Hermano o hijo de quien haya muerto o adquirido una inhabilidad absoluta y permanente en combate, en actos del servicio o como consecuencia del mismo durante la presentacion del servicio militar obligatorio, a menos, que siendo apto, voluntariamente quiera prestarlo</option>
                  <option>Hijo de padres incapacitados para trabajar o mayores de 60 años, cuando estos carezcan de renta, pension o medios de subsistencia, siempre que dicho hijo vele por ellos</option>
                  <option>Huérfano de padre o madre que atienda con su trabajo a la subsistencia de sus hermanos incapaces de ganarse el sustento</option>
                  <option>Los casados que hagan vida conyugal</option>
                  <option>Es clerigo o Religioso</option>
                  <option>Los indigenas que acrediten su identidad cultural, social y ecónomica</option>
                  <option>Es desmovilizado</option>
                  <option>Ciudadano es aspirante a ingresar a las escuelas de formacion de Oficiales, Suboficiales y Agentes</option>
                  <option>Ciudadano con hermanos prestando servicio militar</option>
                  <option>Quienes acrediten la existencia de union marital de hecho legalmente declarada</option>
                  <option>Las personas en situacion de discapacidadfísic, psiquica, o sensorial permanente</option>
                  <option>Los varones colombianos que después de si inscripcion hayan dejado de tener el componente de sexo masculino en su registro civil</option>
                  <option>Los ciudadanos incluidos en el programa de proteccion a victimas y testigos de Fiscalia General de la Nacion</option>
                  <option>Los ciudadanos objetores de conciencia</option>
                </select>
              </div>                         
            </div>           
          
      </div>
    );
  }
}

export default Person;
