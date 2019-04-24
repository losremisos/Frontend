import React, { Component } from 'react'
import '../App.css'
import foto from '../img/pesona.png'

class InfoPerfil extends Component{


    render(){
        return(
           
            <div className="card ">
                <img className="card-img-top" src={foto} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Juan Camilo Villalba</h5>
                    <p className="card-text">camilovilla@outlook.com</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Dirección: Cll 21 #78-30</li>
                    <li className="list-group-item">Cali, Valle del Cauca</li>
                    <li className="list-group-item">CC. 1.120.930.432</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Editar</a>
                </div>
            </div>
            
        )
    }
}

export default InfoPerfil;