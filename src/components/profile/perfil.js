import React, { Component } from 'react'
import axios from 'axios';
import { serverLink } from './../../JS/api.js';
class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        let id = localStorage.getItem("UsrID");
        console.log("Aqui esta la peticion");
        console.log(axios({
            method: "GET",
            url: serverLink+"users/"+id
        }));
        axios({
            method: "GET",
            url: serverLink+"users/"+id
        }).then((res) => {
            this.setState({
                users: res.data,
                correo: res.data.email,
            })
        });
    }


    render(){
        const{users}=this.state;
        let cometario = "block";
        let not = "none";
        let yesnot = "block";
        console.log(users);
        if(users.comentario === "" || users.comentario === null){
            cometario = "none";
            
        }
        let State;
        if(users.estadoProceso === 1){
            State = "Proceso";
            not = "block";
            yesnot = "none"
        }else if(users.estadoProceso=== 0){
            State = "Revision";

        }else{
            State = "Citación";
        }
        return(
           <div>
            <div className="jumbotron">
                <h1 className="display-4">Fuerzas Militares de Colombia </h1>
                <p className="lead">Ejercito Nacional - Dirección de Reclutamiento y Control Reservas.</p>
                <hr className="my-4"/>
                <p>Defina su situación militar completando la información requerida</p>
                <p className="lead">
                    <a style={{display:not}} className="btn btn-style tn-lg" href="/inscription" role="button">Continuar</a>
                    <a style={{display:yesnot}} className="btn btn-style tn-lg" href="/inscription" role="button">Ver</a>
                </p>
            </div>
            <div className="jumbotron" style={{display:cometario}}>
                <h3>Nuevo Estado: {State}</h3>
                <h5>{users.comentario}</h5>
            </div>
            </div>
            
        )
    }
}

export default Perfil;