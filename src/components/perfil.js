import React, { Component } from 'react'
import '../App.css'

class Perfil extends Component{


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