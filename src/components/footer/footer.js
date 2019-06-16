import React, { Component } from 'react'
import './footer.css';
import logo from './logoXDev.png';

class Footer extends Component{


    render(){
        return(
          
            
        <footer>
        <div className="footer" >
        <hr></hr>
            <label className="painted">DIRECCIÓN DE RECLUTAMIENTO</label>
        <br />
        <label>Av. Caracas No. 9-51 - Bogotá-Colombia</label>
        <br />
        <label>PBX: +57 (1) 3362211 Ext: 302 - 303 - 304 - 305 - 306 - 307 </label>
            
                <div className="row">
                    <div className="col-md-4"><img src={logo} className="responsiveimg-f" alt="logo" /> </div>
                    <div id="cright" className="col-md-8"> <p>© 2019 Todos los derechos reservados | Este es un sitio seguro </p></div>
                </div>
        </div>

        </footer>
        
            
        )
    }
}

export default Footer;