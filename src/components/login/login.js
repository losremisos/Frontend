import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div>
        
          
        <div className="App-header App">

        <div>
          <label className="title">Iniciar Sesión</label>
          <label className="paragraph">Bienvenido al sistema mediante el cual podrá realizar la solicitud de su libreta militar. Si ya se encuentra registrado por favor ingrese su Usuario y Contraseña para acceder al sistema. Si aún no tiene clave de acceso <a className="links" href="">Regístrese aquí</a>.</label>
        </div>
        
          <div className="form-group">
          <label htmlFor="formGroupExampleInput">Usuario</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Cedula"></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Clave de acceso</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
            <label><a className="links" href="">¿Olvidó su clave de acceso?</a></label>
          </div>

          
          <button type="submit" className="btn btn-style">Entrar al sistema</button>
          
          
        </div>

        <div className="footer" >
        
        <hr></hr>
        <label >Nombre empresa © 2019 Todos los derechos reservados | Este es un sitio seguro </label>  
        </div>
        

      </div>
    );
  }
}

export default Login;
