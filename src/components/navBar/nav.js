import React, { Component } from 'react'

class Navigation extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navspace">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Inicio</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="">Información Requerida<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="">Consulta<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="">Certificado<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="">Contacto<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="">FAQ<span className="sr-only"></span></a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="buscar" placeholder="Buscar" aria-label="Buscar"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>



        )
    }

}

export default Navigation;