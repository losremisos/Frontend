import React, { Component } from 'react';
import  InfoPadre  from '../Father_Info/infoPadre';
import  Boton  from './botondeslizante';
import SiblingInfo from '../Sibling_Info/infoHermanos';
import DependenceInfo from '../Dependence_info/infoDependencia';
import './Familiar.css';


class Formulario extends Component {
  render() {
    return (
      <div>
        <div className="App-header1 App">
        <div className="col-md-12 page-title">
        <h3>Información Familiar</h3>
        </div>
        </div>
        <div className="App-header1 App">
        <Boton title="Información del Padre" pantalla = {InfoPadre} value="Guardar Información del Padre"/>
        <Boton title="Información de la Madre" pantalla = {InfoPadre} value="Guardar Información del Madre"/>
        <Boton title="Información de los Hermanos" pantalla = {SiblingInfo} value="Guardar Información de los Hermanos"/>
        <Boton title="Dependencia Economica" pantalla = {DependenceInfo} value="Guardar Información de Dependencia Enconómica"/>
        <div className="row"> 
        <div className="col-md-9" >  
        </div>
        <div className="col-md-" >      
						    <input type="button" value= "Cancelar"  className="btn btn-style" />
        </div>
        <div className="col-md-1" >      
        		    <input type="button" value= "Validar"  className="btn btn-style" />
        </div>
        </div>
        </div>
        
        
        <div className="footer" >
        
        <hr></hr> 
        <label className="painted">DIRECCIÓN DE RECLUTAMIENTO</label>
        <br />
        <label>Av. Caracas No. 9-51 - Bogotá-Colombia</label>
        <br />
        <label>PBX: +57 (1) 3362211 Ext: 302 - 303 - 304 - 305 - 306 - 307 </label>
        </div>

        
        
        </div>
    );
  }
}



export default Formulario;
