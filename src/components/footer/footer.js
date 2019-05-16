import React, { Component } from 'react';
import './footer.css';





class Footer extends Component {

  render() {
    return (
      <div>
        <div className="line" ></div>
        <div className="container cFoot">
            <div className="row spacer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.2409092573525!2d-74.0827731707708!3d4.600535999791115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMDEuOSJOIDc0wrAwNCc1Ni4wIlc!5e0!3m2!1ses!2sco!4v1557979021418!5m2!1ses!2sco"  width="2200" height="150" frameborder="0" style={{border:0}} allowfullscreen/>
            </div>
            <div className="row">
                <div className="col-md-12 propiedades">
                    <span className="painted">
                        <span className="control-label">DIRECCIÓN DE RECLUTAMIENTO</span>
                    </span>   
                    <br />
                    <span className="control-label">Av. Caracas No. 9-51 - Bogotá-Colombia</span>
                    <br />
                    <span className="control-label">PBX: +57 (1) 3362211 Ext: 302 - 303 - 304 - 305 - 306 - 307 </span>
                </div>
            </div>
        </div>

        

        

      </div>
    );
  }
}



export default Footer;
