import React, { Component } from 'react';
import Navigation  from '../navBar/nav'
import './login.css';
import AuthService from '../../JS/AuthService'

class Login extends Component {

constructor(props){
  super()
  this.handleChange = this.handleChange.bind(this);
  this.Auth=new AuthService();
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}
  render() {
    return (
      <div>
        
        <Navigation/>
          
        <div className="App-header App">

        <div>
         
          <label className="paragraph">Bienvenido al sistema mediante el cual podrá realizar la solicitud de su libreta militar. Si ya se encuentra registrado por favor ingrese su Usuario y Contraseña para acceder al sistema. Si aún no tiene clave de acceso <a className="links" href="">Regístrese aquí</a>.</label>
        </div>
          <form onSubmit={this.handleFormSubmit}> 
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Usuario</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Cedula" onChange={this.handleChange}></input>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Clave de acceso</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" onChange={this.handleChange}></input>
              <label><a className="links" href="">¿Olvidó su clave de acceso?</a></label>
            </div>     
            <button type="submit" className="btn btn-style">Entrar al sistema</button> 
          </form>        
          
          
        </div>

        <div className="footer" >
        
        <hr></hr>
        <label >Nombre empresa © 2019 Todos los derechos reservados | Este es un sitio seguro </label>  
        </div>
      
      </div>
    );
  }


  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleFormSubmit(e){
    e.preventDefault();
  
    this.Auth.login(this.state.username,this.state.password)
        .then(res =>{
           this.props.history.replace('/');
        })
        .catch(err =>{
            alert(err);
        })
}

componentWillMount(){
    if(this.Auth.loggedIn())
        this.props.history.replace('/');
}
}

export default Login;
