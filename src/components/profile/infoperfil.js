import React, { Component } from 'react'
import axios from 'axios';
import foto from './../../assets/pesona.png'

class InfoPerfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            edit : "false"
        }
        this.editProfile = this.editProfile.bind(this);
    }
    editProfile(){
        let value =""
        if(this.state.edit==="false"){
            value="true";
        }else{
            value="false";
        }
        this.setState({
            edit:value
        })
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


    render(){
        const {users} = this.state;
        let {edit} = this.state;
        let window = "";
        console.log(edit);
        var {Tipe_Doc} = "";
        if(users.tipoDocumento=== 1){
            Tipe_Doc = "CC: ";
        }else if(users.tipoDocumento=== 0){
            Tipe_Doc = "TI: ";
        }else{
            Tipe_Doc = "NUIP: ";
        }
        console.log("Lo que hay en user del state");
        console.log(users);
        console.log(edit);
        if (edit === "false") {
        window=
            <div className="card ">
                <img className="card-img-top" src={foto} alt="algo"/>
                <div className="card-body">
                    <h5 className="card-title">{users.nombre} {users.primerApellido} {users.segundoApellido}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <div className="list-group-item"><p>Correo Electronico</p><h6>{users.email}</h6></div>
                    <div className="list-group-item"><p>Documento de Identificación</p><h6>{Tipe_Doc}{users.documento}</h6></div>
                    <div className="list-group-item"><p>Dirección</p><h6>{users.direccion}</h6></div>
                    <div className="list-group-item"><p>Lugar de Residencia</p><h6>{users.ciudad}, {users.departamento}</h6></div>
                    <div className="list-group-item"><p>Teléfono</p><h6>{users.telefono}</h6></div>
                </ul>
                <div className="card-body">
                    <p onClick={this.editProfile}><font color="blue">Editar</font></p>
                </div>
            </div>
        }
        else{
            window=
                <div className="card ">
                    <img className="card-img-top" src={foto} alt="algo"/>
                    <div className="card-body">
                        <h5 className="card-title">{users.nombre} {users.primerApellido} {users.segundoApellido}</h5>
                    </div>
                    <div className="list-group list-group-flush">
                        <div className="list-group-item"><p>Correo Electronico</p><input class="inputedit" type="text" value={users.email}/></div>
                        <div className="list-group-item"><p>Documento de Identificación</p><h6>{Tipe_Doc}{users.documento}</h6></div>
                        <div className="list-group-item"><p>Dirección</p><input class="inputedit" type="text" value={users.direccion}/></div>
                        <div className="list-group-item"><p>Lugar de Residencia</p><input class="inputedit" type="text" value={users.ciudad}/></div>
                        <div className="list-group-item"><p>Teléfono</p><input class="inputedit" type="text" value={users.telefono}/></div>
                    </div>
                    <div className="card-body">
                        <p onClick={this.editProfile}><font color="blue">Guardar</font></p>
                    </div>
                </div>
        }
        return(
            <div>
                {window}
            </div>
        )
    }
}

export default InfoPerfil;