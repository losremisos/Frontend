import React, { Component } from 'react';
import  Login  from '../../app/login/login';
import  InfoPadre  from '../Father_Info/infoPadre';
import SiblingInfo from '../Sibling_Info/infoHermanos';
import DependenceInfo from '../Dependence_info/infoDependencia';
import './Familiar.css';
import foto from '../../../assets/drop-down-arrow.png'

class Boton extends Component {
  state = {
    display: 'none',
  }
  onChange = () => {
    if(this.state.display=='none'){
      this.setState({ display: 'block' });
    }else{
    this.setState({ display: 'none' });
    }
 }
  render() {
    return (
      <div>
        <div >
            <div className="btn-group btn-block">
            <button type="button" className="btn btn-style" onClick={this.onChange}>{this.props.title}</button>
            </div>
        <div className="Pantalla"  style={{display:this.state.display}}><this.props.pantalla value = {this.props.value}/></div>
        
      </div> 
    </div>
    );
  }
}



export default Boton;
