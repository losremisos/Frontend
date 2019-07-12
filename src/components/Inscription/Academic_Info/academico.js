import React, { Component } from 'react'
import axios from 'axios';


class AcademicInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [],
          items: [],
          firstload : true,
          display: 'none',
        checked: false,
        confirmar:true
        }
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        let newitem = this.state.items;
        newitem[parseInt(event.target.id, 10)] = event.target.value;
        this.setState({ items:newitem });
      }
    
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
            let info = this.props.information[2]
            this.setState({items:info , firstload:false, confirmar:true})
            if(info[0]===true){
                this.setState({checked:true, display: 'block'})
            }
          }
          console.log(this.props.submit);
            
          if (this.props.submit === "1" && this.state.confirmar===true) {

            console.log(this.state.items);
            this.props.information[2] = this.state.items;
            this.props.getDatos(this.props.information);
            this.setState({firstload:true, confirmar:false})
          }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-2">
                                <label><input type="checkbox" id="0"
                                    checked={this.state.checked}
                                    onChange={this.handleCheckboxChange} />¿Está cursando actualmente?</label>
                            </div>
                        </div>

                    </div>
                    <div style={{display:this.state.display}}>
                    <div className="row" >
                        <div className="col-md-4">
                            <label for="inputState">Educación Básica</label>
                            <select id="1" value={this.state.items[1]} onChange={this.handleChange} className="form-control">
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
                            <input type="text" className="form-control" id="2"  onChange={this.handleChange} value={this.state.items[2]}/>
                        </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Fecha de terminación de estudios</label>
                            <input type="date" className="form-control" id="3"  onChange={this.handleChange} value={this.state.items[3]}/>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="examinarActaCert">Adjunte Acta de Grado o Certificación</label>
                                <input type="file" className="form-control-file" id="4" />
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