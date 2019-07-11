import React, { Component } from 'react';
import './login.css';
import { ADD_SESION, serverLink } from '../../JS/api';
import axios from 'axios';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
      userError: '',
      passwordError: '',
      redirect: false
    }
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitLogIn = this.submitLogIn.bind(this);
  }

  handleUser(e) {
    this.setState({ user: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value })
  }

  submitLogIn(e) {
    let isValid = true;
    if (this.state.user === '') {
      this.setState({ userError: 'Ingrese un usuario' });
      isValid = false;
    } else {
      this.setState({ userError: '' });
    }
    if (this.state.password === '') {
      this.setState({ passwordError: 'Ingrese la Contraseña' })
      isValid = false;
    } else {
      this.setState({ passwordError: '' })
    }
    if (isValid) {
      let token = '';
      let id = 1;
      let link = serverLink + 'user_token';
      let config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      axios.post(link, { "auth": { "email": this.state.user, "password": this.state.password } }, config).then(
        res => {
          if (res.status === 201) {
            token = res.data.jwt;
            ADD_SESION(token);
            this.setState({redirect: true});           
          } else {
            this.setState({ userError: "Usuario o Contraseña incorrectos" })
          }
        }).catch(
          function (error) { console.log(error) }
        )
    }
  }

  render() {
    if (this.state.redirect) {
      window.location.href = '/home';      
    } else {
      return (
        <div>
          <div className="App-header App">
            <div>
              <h1 className="title">Iniciar Sesión</h1>
              <label className="paragraph">Bienvenido al sistema mediante el cual podrá realizar la solicitud de su libreta militar. Si ya se encuentra registrado por favor ingrese su Usuario y Contraseña para acceder al sistema. Si aún no tiene clave de acceso <a className="links" href="/registry">Regístrese aquí</a>.</label>
            </div>

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Usuario</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Correo" onChange={this.handleUser} value={this.state.user} />
              <h5 className="alerta">{this.state.userError}</h5>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Clave de acceso</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" onChange={this.handlePassword} value={this.state.password} />
              <h5 className="alerta">{this.state.passwordError}</h5>
              <label><a className="links" href="">¿Olvidó su clave de acceso?</a></label>
            </div>

            <button type="submit" className="btn btn-style" onClick={this.submitLogIn}>Iniciar Sesión</button>
          </div>

        </div>
      );
    }
  }
}