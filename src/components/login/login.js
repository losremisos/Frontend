import React, { Component } from 'react';

import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header >
        
        <div>
          <div className="style-institucional"></div>
          
          <div className="container-h row">
            <div className="col-md-7 col-sm-7 padding-h">
              <div className="img-header1" ><img src="https://www.ejercito.mil.co/_templates/DEFAULT2018/recursos/images//cabezote/logo.png" className="img-fluid" alt="logo" /></div>
              <div className="background1 hidden-sm hidden-xs"></div>
            </div>

            <div className="col-md-5 col-sm-5 padding-h">
            <div className="row">
              <div className="img-header3 col-md-8 col-sm-8" ><img src="https://www.libretamilitar.mil.co/Resources/img/logo.png" className="img-fluid" alt="logo" /> </div>
              <div className="img-header2 col-md-4 col-sm-4" ><img src="https://www.libretamilitar.mil.co/Resources/img/escudo.png" className="img-fluid" alt="logo" /> </div>
            </div>  
              <div className="background2 hidden-sm hidden-xs"></div>
            </div> 
          </div>
           
        </div> 
          
        <div className="App-header">

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
        
        </header>

      </div>
    );
  }
}

export default Login;
