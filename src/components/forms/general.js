import React, { Component } from 'react';
import Navigation  from '../navBar/nav';
import Person from './perBasic';
import PersonalAdd from './perAditional';
import './general.css';

class General extends Component {
  render() {
    return (
      <div>        
        <Navigation/>

        <div className="App-header App">
            <div class="container">                    
                <div class="col-md-12">   


                    <a className="btn  mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_10" role="button" aria-expanded="false" aria-controls="collapse_10">Información Personal</a>
                    <div class="collapse" id="collapse_10">

                        <form>
                            <div class="card card-body">
                                <a className="btn text-left btn-style btn-block" data-toggle="collapse" href="#collapse_11" role="button" aria-expanded="false" aria-controls="collapse_11">Información Basíca</a>
                                <div class="collapse" id="collapse_11">
                                    <div class="card card-body">                                  
                                        <Person/>
                                    </div>
                                </div> 

                                <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_12" role="button" aria-expanded="false" aria-controls="collapse_12">Información Adicional</a>
                                <div class="collapse" id="collapse_12">
                                    <div class="card card-body">                                  
                                        <PersonalAdd/>
                                    </div>
                                </div>                  

                                <button type="submit" className="btn btn-style-submit mt-5">Guardar</button>
                            </div>        
                        </form>

                    </div>





                    <a className="btn mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_20" role="button" aria-expanded="false" aria-controls="collapse_20">Información Academica</a>
                    <div class="collapse" id="collapse_20">
                        <div class="card card-body">
                            <a className="btn  text-left btn-style btn-block" data-toggle="collapse" href="#collapse_21" role="button" aria-expanded="false" aria-controls="collapse_21">Educación (Básica y/o Media)</a>
                            <div class="collapse" id="collapse_21">
                                <div class="card card-body">                                  
                                    <Person/>
                                </div>
                            </div> 

                            <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_22" role="button" aria-expanded="false" aria-controls="collapse_22">Educación Superior</a>
                            <div class="collapse" id="collapse_22">
                                <div class="card card-body">                                  
                                    <Person/>
                                </div>
                            </div> 
                            <button type="submit" className="btn btn-style-submit mt-5">Guardar</button>

                        </div>                        
                    </div>

                    <a className="btn mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_30" role="button" aria-expanded="false" aria-controls="collapse_30">Información Laboral</a>
                    <div class="collapse" id="collapse_30">
                        <div class="card card-body">               
                            <Person/>                   
                            <button type="submit" className="btn btn-style-submit mt-5">Guardar</button>
                        </div>                        
                    </div>

                    <a className="btn mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_40" role="button" aria-expanded="false" aria-controls="collapse_40">Información Familiar</a>
                    <div class="collapse" id="collapse_40">
                        <div class="card card-body">               
                            <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_41" role="button" aria-expanded="false" aria-controls="collapse_41">Educación de la Madre</a>
                            <div class="collapse" id="collapse_41">
                                <div class="card card-body">                                  
                                    <Person/>
                                </div>
                            </div> 

                            <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_42" role="button" aria-expanded="false" aria-controls="collapse_42">Educación del Padre</a>
                            <div class="collapse" id="collapse_42">
                                <div class="card card-body">                                  
                                    <Person/>
                                </div>
                            </div> 

                            <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_43" role="button" aria-expanded="false" aria-controls="collapse_43">Educación de los Hermanos</a>
                            <div class="collapse" id="collapse_43">
                                <div class="card card-body">                                  
                                    <Person/>
                                </div>
                            </div> 
                            <button type="submit" className="btn btn-style-submit mt-5">Guardar</button>
                        </div>                        
                    </div>

             </div>
            </div>
        </div>       
      </div>
    );
  }
}

export default General;
