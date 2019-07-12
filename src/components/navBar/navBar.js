import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { RM_SESION } from './../../JS/api';

export class Navbar extends Component {

  render() {
    let Nombre = " " + localStorage.getItem("UsrName");
    //console.log(Nombre)
    //console.log(localStorage)
    let IsLogged = localStorage.getItem("IsLogged");
    //if(IsLogged === "true") {
    //console.log(localStorage)
    //}
    let login = (<Link style={{ textDecoration: 'none' }} className="option" to="/login" >Iniciar sesión</Link>);
    let logout = (<Link style={{ textDecoration: 'none' }} className="option" to="/home">
      <div onClick={() => { RM_SESION() }}>Cerrar sesión</div>
    </Link>);
    let welcome = (<Link style={{ textDecoration: 'none' }} className="option" to="/home" >Bienvenido {Nombre}</Link>);
    let registrar = (<Link style={{ textDecoration: 'none' }} className="option" to="/registry" onClick>
      <span onClick={() => { RM_SESION() }}>Registrarse</span>
    </Link>);
    let window = "";
    console.log(IsLogged)

    if (IsLogged === "true") {
      window =
        <div className="container" style={{ display: 'inherit' }}>
          <ul className="navbar-nav">
            <li className="nav-item" id="Inicio">
              <a className="nav-link" href="/home">
                <span id="inicioHome" >Inicio</span>
              </a>
            </li>
            <li className="nav-item" id="Consultas">
              <a className="nav-link" href="/Default">
                <span id="consultasHome" >Consultas</span>
              </a>
            </li>
            <li className="nav-item" id="Liquidacion">
              <a className="nav-link" href="/Default">
                <span id="liquidacionHome" >Soporte Liquidacion</span>
              </a>
            </li>
            <li className="nav-item" id="Perfil">
              <a className="nav-link" href="/profile">
                <span id="perfilHome" >Mi Perfil</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ul-right">
            <li className="nav-item navbar-right" id="Nombre">
              {welcome}
            </li>
            <li className="nav-item navbar-right" id="Salir">
              {logout}
            </li>
          </ul>
        </div>
    } else {
      window =
        <div className="container" style={{ display: 'inherit' }}>
          <ul className="navbar-nav">
            <li className="nav-item" id="Inicio">
              <a className="nav-link" href="/Default">
                <span id="inicioHome" >Inicio</span>
              </a>
            </li>
            <li className="nav-item" id="Consultas">
              <a className="nav-link" href="/Default">
                <span id="consultasHome" >Consultas</span>
              </a>
            </li>
            <li className="nav-item" id="Liquidacion">
              <a className="nav-link" href="/Default">
                <span id="liquidacionHome" >Soporte Liquidacion</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navbar-right" id="Nombre">
              {registrar}
            </li>
            <li className="nav-item navbar-right" id="Salir">
              {login}
            </li>
          </ul>
        </div>
    }

    return (
      <div className="row">
        <div className="container-h row">
          <div className="col-md-7 col-sm-7 padding-h">
            <div className="img-header1" ><img src={require("./../../assets/escudo.png")} className="img-fluid" alt="logo" /></div>
            <div className="background1 hidden-sm hidden-xs"></div>
          </div>

          <div className="col-md-5 col-sm-5 padding-h">
            <div className="row">
              <div className="img-p col-md-8 col-sm-9 col-9" ><img src={require("./../../assets/logo.png")} className="img-fluid responsiveimg" alt="logo" /> </div>
              <div className="col-md-4 col-sm-3 img-p col-3"><img src={require("./../../assets/republica.png")} className="img-fluid responsiveimg" alt="logo" /> </div>
            </div>
            <div className="background2 hidden-sm hidden-xs"></div>
          </div>
        </div>

        <div className="row2">
          <div className="navbar navbar-expand-lg navbar-dark ournav">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              {window}
            </div>

          </div>
        </div>
      </div>
    )
  }
}