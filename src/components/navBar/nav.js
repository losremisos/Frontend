import React, { Component } from 'react'

class Navigation extends Component {

    render(){
        return(
            <div className="row">
          <div className="style-institucional"></div>
          
          <div className="container-h row">
            <div className="col-md-7 col-sm-7 padding-h">
              <div className="img-header1" ><img src="https://www.ejercito.mil.co/_templates/DEFAULT2018/recursos/images//cabezote/logo.png" className="img-fluid" alt="logo" /></div>
              <div className="background1 hidden-sm hidden-xs"></div>
            </div>

            <div className="col-md-5 col-sm-5 padding-h">
            <div className="row">
              <div className="img-p col-md-8 col-sm-9 col-9" ><img src="https://www.libretamilitar.mil.co/Resources/img/logo.png" className="img-fluid responsiveimg" alt="logo" /> </div>
              <div className="col-md-4 col-sm-3 img-p col-3"><img src="https://www.libretamilitar.mil.co/Resources/img/escudo.png" className="img-fluid responsiveimg" alt="logo" /> </div>
            </div>  
              <div className="background2 hidden-sm hidden-xs"></div>
            </div> 
          </div>
           
        </div> 



        )
    }

}

export default Navigation;