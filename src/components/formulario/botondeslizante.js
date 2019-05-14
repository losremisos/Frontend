import React, { Component } from 'react';
import Navigation  from '../navBar/nav';
import  Login  from '../login/login';
import  InfoPadre  from './infoPadre';
import InfoHermano from './infoHermanos';
import InfoDependencia from './infoDependencia';
import './Familiar.css';
import foto from './../../assets/drop-down-arrow.png'

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
