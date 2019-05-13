import React, { Component } from 'react'
import Navigation from '../navBar/nav'

class Academico extends Component {

    render(){
        return(
          <div>
              <Navigation/>
              <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-md-4 form-check">
                                    <label>¿Está cursando actualmente?</label>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" id="selCursando1" value="si" checked/>
                                        <label class="form-check-label" for="selCursando1">Sí</label>
                                    </div>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" id="selCursando2" value="no" checked/>
                                        <label class="form-check-label" for="selCursando2">No</label>
                                    </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                    <label for="inputState">Educación Básica</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Escoja...</option>
                                        <option>Primero</option>
                                        <option >Segundo</option>
                                        <option >Tercero</option>
                                        <option >Cuarto</option>
                                        <option >Quinto</option>
                                        <option >Sexto</option>
                                        <option >Septimo</option>
                                        <option >Octavo</option>
                                        <option >Noveno</option>
                                        <option >Decimo</option>
                                        <option >Undecimo</option>

                                    </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputInstituto">Institución académica que cursó el último año</label>
                                <input type="text" className="form-control" id="inputInstituto"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label>Fecha de terminación de estudios</label>
                                <input type="text" className="form-control" id="fechaTerminacion"/> 
                            </div>
                            <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="examinarActaCert">Adjunte Acta de Grado o Certificación</label>
                                        <input type="file" className="form-control-file" id="examinarActaCert"/>
                                    </div>
                            </div>
                        
                    </div>    
                    <br/>
                    <button type="submit" className="btn btn-style">Guardar Información Académica</button>
                    </form>
                </div>
            </div>
        )
      }

    }
    
    export default Academico;