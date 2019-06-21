import React, { Component } from 'react';




export class Mapa extends Component {
  render() {
    let IsLogged = localStorage.getItem("IsLogged");
    return (
        <div>
        <div className="App-header App">
          <div>
            <h1 className="title">Mapa del Sitio</h1>
         </div>
         <div></div>
         <a href="/home"><div >Home</div></a>
         <a href="/login"><div >Login</div></a>
         <a href="/registry"><div >Registro</div></a>
         <a href="/profile"><div >Perfil</div></a>
         <a href="/inscription"><div >Inscribase</div></a>
         <a href="/mapasite"><div >Mapa del Sitio</div></a>
        </div>
      </div>
    );
  }
}