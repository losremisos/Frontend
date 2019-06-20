import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { RM_SESION } from './../../JS/api';

export class Navbar extends Component {
  render() {
    let IsLogged = localStorage.getItem("IsLogged");
    let login = (<Link style={{ textDecoration: 'none' }} className="option" to="/login" >Iniciar sesión</Link>);
    let logout = (<Link style={{ textDecoration: 'none' }} className="option" to="/home">
      <div onClick={() => { RM_SESION() }}>Cerrar sesión</div>
    </Link>);
    let window = "";

    if (IsLogged === "true") {
      window =
        <ul className="nav navbar-nav2">
          <li id="Inicio">
            <a href="/home">
              <span id="inicioHome" >Inicio</span>
            </a>
          </li>
          <li id="Consultas">
            <a href="/home">
              <span id="consultasHome" >Consultas</span>
            </a>
          </li>
          <li id="Liquidacion">
            <a href="/home">
              <span id="liquidacionHome" >Soporte Liquidacion</span>
            </a>
          </li>
          <li id="Perfil">
            <a href="/home">
              <span id="perfilHome" >Mi Perfil</span>
            </a>
          </li>

          <li id="Nombre">
            <span id="nombreHome" ><span className="glyphicon glyphicon-user"></span> BIENVENIDO XDev</span>
          </li>
          <li id="Salir">
              {logout}
          </li>
        </ul>
    } else {
      window =
        <ul className="nav navbar-nav2">
          <li id="Inicio">
            <a href="/home">
              <span id="inicioHome" >Inicio</span>
            </a>
          </li>
          <li id="Consultas">
            <a href="/home">
              <span id="consultasHome" >Consultas</span>
            </a>
          </li>
          <li id="Liquidacion">
            <a href="/home">
              <span id="liquidacionHome" >Soporte Liquidacion</span>
            </a>
          </li>

          <li id="Nombre">
            <span id="nombreHome" ><span className="glyphicon glyphicon-user"></span> BIENVENIDO XDev</span>
          </li>
          <li id="Salir">
              {login}
          </li>
        </ul>
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
          <div className="navbar ournav">
            <div className="container ourcontainer">
              <div className="collapse navbar-collapse ourcollapse">
                {window}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}