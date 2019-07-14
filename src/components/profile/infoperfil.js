import React, { Component } from 'react'
import axios from 'axios';
import foto from './../../assets/pesona.png'

class InfoPerfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        let id = localStorage.getItem("UsrID");
        console.log("Aqui esta la peticion");
        console.log(axios({
            method: "GET",
            url: "http://localhost:4200/users/"+id
        }));
        axios({
            method: "GET",
            url: "http://localhost:4200/users/"+id
        }).then((res) => {
            this.setState({
                users: res.data
            })
        });
    }


    render() { 
        const {users} = this.state;
        console.log("Lo que hay en user del state");
        console.log(users);
        let img = users.avatar;
        const base64 = 'data:image/png;base64' + img
        return(
            <div className="card ">
                <img className="card-img-top" src={base64} alt="algo"/> 
                <div className="card-body">
                    <h5 className="card-title">{users.nombre} {users.primerApellido} {users.segundoApellido}</h5>
                    <p className="card-text">{users.correo}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{users.direccion}</li>
                    <li className="list-group-item">{users.ciudad}, {users.departamento} </li>
                    <li className="list-group-item">CC. {users.documento}</li>
                </ul>
                <div className="card-body">
                    <a href="/" className="card-link">Editar</a>
                </div>
            </div>
            
        )
    }
}

export default InfoPerfil;