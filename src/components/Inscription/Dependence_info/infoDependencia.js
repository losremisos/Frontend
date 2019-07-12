import React, { Component } from 'react';
import '../Family_Info_Components/Familiar';

class DependenceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      firstload : true,
      confirmar: true
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let newitem = this.state.items;
    newitem[parseInt(event.target.id, 10)] = event.target.value;
    this.setState({ items:newitem });
  }
  render() {
    if(this.state.firstload===true && this.props.load===true){
      let info = this.props.information[8]
      this.setState({items:info , firstload:false, confirmar:true})
    }
    console.log(this.props.submit);
      
    if (this.props.submit === "1" && this.state.confirmar===true) {
      console.log(this.state.items);
      this.props.information[8] = this.state.items;
      this.props.getDatos(this.props.information);
      this.setState({firstload:true, confirmar:false})
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
              <h4>Por favor indique, en la actualidad su dependencia económica. Recuerde que esta información será validada.</h4>
             </div>
                 <div className="row">
                 <div className="col-md-12">
                              <div className="control-group">
                                    <label for="DependenciaEconómica">Dependencia Económica (<span className="field-required">*</span>):</label>
                                    <select disabled={this.props.dis} name="DependenciaEconómica" title="Dependencia Económica" id="0" className="form-control" value={this.state.items[0]} onChange={this.handleChange}>
                                      <option>Seleccione...</option>
                                      <option value="1">Depende del Grupo familiar (Padre y/o Madre)</option>
                                      <option value="2">Depende de un Tercero</option>
                                      <option value="3">Independiente Económicamente</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
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
        </div>
      </div>
    );
  }
}



export default DependenceInfo;
