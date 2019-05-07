import React, { Component } from 'react'
import axios from 'axios';


class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
          users: []
        };
      }
    
      componentDidMount(){
        console.log("Aqui esta la peticion");
        console.log(axios.get('http://localhost:4200/districts/1'));
      }

    render(){
        return(
           
            <div className="jumbotron">
                <h1 className="display-4">Fuerzas Militares de Colombia</h1>
                <p className="lead">Ejercito Nacional - Dirección de Reclutamiento y Control Reservas.</p>
                <hr className="my-4"/>
                <p>Defina su situación militar completando la información requerida</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Comenzar</a>
                </p>
            </div>
            
        )
    }
}

export default Perfil;