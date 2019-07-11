import React, { Component } from 'react';
import './../Family_Info_Components/Familiar';

class Working_Info extends Component {
    state = {
        display: 'block',
        checked: false
      }
    handleCheckboxChange = event =>{
        if(this.state.display==='none'){
            this.setState({ display: 'block' });
          }else{
          this.setState({ display: 'none' });
          }
        this.setState({ checked: event.target.checked })
     }
     render() {
        return (
        <div>
            <div>
            <label><input type="checkbox" id="CedulaMilitar" checked={this.state.checked}
            onChange={this.handleCheckboxChange}value="0"/>Validar Informacion</label>
            </div>
            <div style={{display:this.state.display}}>
            <label for="AdminReview">Comentarios</label>
                <textarea name="AdminReview" type="text" className="form-control" />
            </div>  
        </div>
        );
    }
}



export default Working_Info;