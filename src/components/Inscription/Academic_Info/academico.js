import React, { Component } from 'react'


class AcademicInfo extends Component {
    state = {
        display: 'none',
        checked: false
    }
    handleCheckboxChange = event => {
        if (this.state.display === 'none') {
            this.setState({ display: 'block' });
        } else {
            this.setState({ display: 'none' });
        }
        this.setState({ checked: event.target.checked })
    }
    render() {
        return (
            <div>
                {/* <Navigation/>*/}
                <div className="container">
                    {/*<form>*/}
                    <div className="row">
                        <div className="row">
                            <div className="col-md-2">
                                <label><input type="checkbox" id="TrabajaActual"
                                    checked={this.state.checked}
                                    onChange={this.handleCheckboxChange} />¿Está cursando actualmente?</label>
                            </div>
                        </div>

                    </div>
                    <div style={{display:this.state.display}}>
                    <div className="row" >
                        <div className="col-md-4">
                            <label for="inputState">Educación Básica</label>
                            <select id="inputState" className="form-control">
                                <option selected>Escoja...</option>
                                <option value = "1">Primero</option>
                                <option value = "2">Segundo</option>
                                <option value = "3">Tercero</option>
                                <option value = "4">Cuarto</option>
                                <option value = "5">Quinto</option>
                                <option value = "6">Sexto</option>
                                <option value = "7">Septimo</option>
                                <option value = "8">Octavo</option>
                                <option value = "9">Noveno</option>
                                <option value = "10">Decimo</option>
                                <option value = "11">Undecimo</option>

                            </select>
                       
                    </div>
                    </div>
                        
                    </div>
                    <div className="col-md-6">
                            <label for="inputInstituto">Institución académica que cursó el último año</label>
                            <input type="text" className="form-control" id="inputInstituto" />
                        </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Fecha de terminación de estudios</label>
                            <input type="date" className="form-control" id="fechaTerminacion" />
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="examinarActaCert">Adjunte Acta de Grado o Certificación</label>
                                <input type="file" className="form-control-file" id="examinarActaCert" />
                            </div>
                        </div>

                    </div>
                    {/*
                        <br/>
                    <button type="submit" className="btn btn-style">Guardar Información Académica</button>
                    </form>
                    */}

                </div>
            </div>
        )
    }

}

export default AcademicInfo;