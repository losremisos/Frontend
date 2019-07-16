import React, { Component } from 'react'
import axios from 'axios';
import { GET, serverLink } from './../../JS/api.js';
import foto from './../../assets/pesona.png'

class InfoPerfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            extrausers: [],
            edit : "false",
            correo: "",
            profile_departamento: "",
            profile_ciudad: "",
            profile_direccion: "",
            profile_telefono: ""

        }
        this.editProfile = this.editProfile.bind(this);
        this.userbasica = this.userbasica.bind(this);
        this.userextra = this.userextra.bind(this);
        this.handleChange=this.handleChange.bind(this);
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
        GET("/users/"+id, false).then((res) => {
            this.setState({
                users: res.data,
                correo: res.data.email,
            })
        });
        GET("/user_extra_info/"+id,false).then((res) => {
            this.setState({
                extrausers: res.data.data,
                profile_direccion: res.data.data.direccion,
                profile_departamento: res.data.data.departamento,
                profile_ciudad: res.data.data.ciudad,
                profile_telefono: res.data.data.telefono_movil
            })
        });
    }
    handleChange(event){
        this.setState({
          [event.target.name]:event.target.value
        })
        console.log(this.tipo_documento);
        console.log(this.state.primer_nombre);
      }
    userextra(){
        let id = localStorage.getItem("UsrID");
        const{
          profile_direccion,
          profile_telefono,
          profile_departamento,
          profile_ciudad
        } = this.state;
        axios
        .put(serverLink+"/user_extra_info/"+id,
        {
          params: {
            direccion: profile_direccion,
            telefono_movil: profile_telefono,
            dpto_residencia: profile_departamento,
            municipio_residencia: profile_ciudad,
        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
          this.componentDidMount();
          this.editProfile();
        }).catch(error => {
          console.log("registration error", error);
        });
    
    
      }
    
    userbasica(event){
        let id = localStorage.getItem("UsrID");
        const{
          correo,
        } = this.state;
        axios
        .put(serverLink+"/users/"+id,
        {
          user: {
            email: correo,
        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
          this.userextra();
        }).catch(error => {
          console.log("registration error", error);
        });
    
        event.preventDefault();
    
      }
    


    render(){
        const {users} = this.state;
        const {extrausers} = this.state;
        let {edit} = this.state;
        let window = "";
        console.log(extrausers);
        console.log(this.state.profile_direccion);
        var {Tipe_Doc} = "";
        var {State} = "";
        if(users.tipoDocumento=== 1){
            Tipe_Doc = "CC: ";
        }else if(users.tipoDocumento=== 0){
            Tipe_Doc = "TI: ";
        }else{
            Tipe_Doc = "NUIP: ";
        }
        if(users.estadoProceso === 1){
            State = "Proceso";
        }else if(users.estadoProceso=== 0){
            State = "Revision";
        }else{
            State = "Citación";
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
                    <div className="list-group-item"><p>Estado</p><h6>{State}</h6></div>
                    <div className="list-group-item"><p>Documento de Identificación</p><h6>{Tipe_Doc}{users.documento}</h6></div>
                    <div className="list-group-item"><p>Departamento de Residencia</p><h6>{extrausers.dpto_residencia}</h6></div>
                    <div className="list-group-item"><p>Ciudad de Residencia</p><h6>{extrausers.municipio_residencia}</h6></div>
                    <div className="list-group-item"><p>Dirección</p><h6>{extrausers.direccion}</h6></div>
                    <div className="list-group-item"><p>Teléfono Movil</p><h6>{extrausers.telefono_movil}</h6></div>
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
                        <div className="list-group-item"><p>Correo Electronico</p><input className="inputedit" type="text" name="correo" onChange={this.handleChange} value={this.state.correo}/></div>
                        <div className="list-group-item"><p>Documento de Identificación</p><h6>{Tipe_Doc}{users.documento}</h6></div>
                        <div className="list-group-item"><p>Departamento de Residencia</p><input className="inputedit" type="text" name="profile_departamento" onChange={this.handleChange} value={this.state.profile_departamento}/></div>
                        <div className="list-group-item"><p>Ciudad de Residencia</p><input className="inputedit" type="text" name="profile_ciudad" onChange={this.handleChange} value={this.state.profile_ciudad}/></div>
                        <div className="list-group-item"><p>Dirección</p><input className="inputedit" type="text" name="profile_direccion" onChange={this.handleChange} value={this.state.profile_direccion}/></div>
                        <div className="list-group-item"><p>Teléfono Movil</p><input className="inputedit" type="text"  name="profile_telefono" onChange={this.handleChange} value={this.state.profile_telefono}/></div>
                    </div>
                    <div className="card-body">
                        <p onClick={this.userbasica}><font color="blue">Guardar</font></p>
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