import React, { Component } from 'react';
import BasicInfo from './Basic_Info/perBasic';
import HigherEducationInfo from './HigherEducation_Info/HigEducationInfo';
import AcademicInfo from './Academic_Info/academico';
import AdditionalInfo from './Additional_Info/perAditional';
import FatherInfo from './Father_Info/infoPadre';
import SiblingInfo from './Sibling_Info/infoHermanos';
import DependenceInfo from './Dependence_info/infoDependencia';
import WorkingInfo from './Working_Info/Working_info';
import AdminReview from './Review_Admin/AdminReview';
import './general.css';

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }

export class Inscription extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          percentage: 0,
          information :[[],[]],
          submit: "0"
        }
        this.nextStep = this.nextStep.bind(this)
        this.getData = this.getData.bind(this)
      }
      
      nextStep() {
        this.setState({ submit: "1" })
        if(this.state.percentage === 100) return 
        this.setState({ percentage: this.state.percentage + 25 })
      }
      
      getData(value){
        this.setState({ 
            submit : "0",
            information: value })
        
    }
  render() {
        console.log(this.state.information)
        var Admin;
        var User;
        let admin = localStorage.getItem("admin");
        if(admin === "true"){
            User = "none";
            Admin = "block";
        }else{
            User = "block";
            Admin = "none";
        }   
        return (
            <div>        
              <div className="App-header App">
              <div className="container">                    
                      <div className="col-md-12"> 
                      <div style={{display:User}} ><ProgressBar percentage={this.state.percentage} />
                        <div style={{ marginTop: '20px' }}></div>  
                      
                        </div> 
      
                          <a className="btn  mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_10" role="button" aria-expanded="false" aria-controls="collapse_10">Información Personal</a>
                          <div className="collapse" id="collapse_10">
      
                              <form>
                                  <div className="card card-body">
                                      <a className="btn text-left btn-style btn-block" data-toggle="collapse" href="#collapse_11" role="button" aria-expanded="false" aria-controls="collapse_11">Información Básica</a>
                                      <div className="collapse" id="collapse_11">
                                          <div className="card card-body">                                  
                                            <BasicInfo getDatos={this.getData} information={this.state.information} submit={this.state.submit}/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                            <AdminReview/>
                                      </div> 
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_12" role="button" aria-expanded="false" aria-controls="collapse_12">Información Adicional</a>
                                      <div className="collapse" id="collapse_12">
                                          <div className="card card-body">                                  
                                            <AdditionalInfo getDatos={this.getData} information={this.state.information} submit={this.state.submit}/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                            <AdminReview/>
                                      </div>                  
                                      
                                      <button type="submit" onClick={this.nextStep} className="btn btn-style-submit mt-5" style={{display:User}}>Guardar</button>
                                      
                                      
                                  </div>    
                                     
                              </form>
      
                          </div>
      
      
      
      
      
                          <a className="btn mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_20" role="button" aria-expanded="false" aria-controls="collapse_20">Información Academica</a>
                          <div className="collapse" id="collapse_20">
      
                              <form>
                                      <div className="card card-body">
                                      <a className="btn  text-left btn-style btn-block" data-toggle="collapse" href="#collapse_21" role="button" aria-expanded="false" aria-controls="collapse_21">Educación (Básica y/o Media)</a>
                                      <div className="collapse" id="collapse_21">
                                          <div className="card card-body">                                  
                                              <AcademicInfo/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                          <AdminReview/>
                                      </div> 
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_22" role="button" aria-expanded="false" aria-controls="collapse_22">Educación Superior</a>
                                      <div className="collapse" id="collapse_22">
                                          <div className="card card-body">                                  
                                              <HigherEducationInfo/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                          <AdminReview/>
                                      </div> 
                                      <button type="submit" onClick={this.nextStep} className="btn btn-style-submit mt-5" style={{display:User}}>Guardar</button>
      
                                  </div>  
                              </form>
      
                          </div>
      
                          <a className="btn mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_30" role="button" aria-expanded="false" aria-controls="collapse_30">Información Laboral</a>
      
                          <form>
                              <div className="collapse" id="collapse_30">
                                  <div className="card card-body">               
                                      <WorkingInfo/>  
                                      <div style={{display:Admin}}>
                                          <AdminReview/>
                                      </div>                  
                                      <button type="submit" onClick={this.nextStep} className="btn btn-style-submit mt-5" style={{display:User}}>Guardar</button>
                                  </div>
                                  
                              </div>
                          </form>
      
                          <a className="btn mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_40" role="button" aria-expanded="false" aria-controls="collapse_40">Información Familiar</a>
                          <div className="collapse" id="collapse_40">
      
                              <form>
                                  <div className="card card-body">               
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_41" role="button" aria-expanded="false" aria-controls="collapse_41">Información de la Madre</a>
                                      <div className="collapse" id="collapse_41">
                                          <div className="card card-body">                                  
                                              <FatherInfo/>
                                          </div>
                                          <div style={{display:Admin}}>
                                              <AdminReview/>
                                          </div>  
                                      </div>
                                      
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_42" role="button" aria-expanded="false" aria-controls="collapse_42">Información del Padre</a>
                                      <div className="collapse" id="collapse_42">
                                          <div className="card card-body">                                  
                                              <FatherInfo/>
                                          </div>
                                          <div style={{display:Admin}}>
                                              <AdminReview/>
                                          </div> 
                                      </div>
                                       
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_43" role="button" aria-expanded="false" aria-controls="collapse_43">Información de los Hermanos</a>
                                      <div className="collapse" id="collapse_43">
                                          <div className="card card-body">                                  
                                              <SiblingInfo/>
                                          </div>
                                          <div style={{display:Admin}}>
                                              <AdminReview/>
                                          </div> 
                                      </div>
                                       
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_44" role="button" aria-expanded="false" aria-controls="collapse_44">Dependencia</a>
                                      <div className="collapse" id="collapse_44">
                                          <div className="card card-body">                                  
                                              <DependenceInfo/>
                                          </div>
                                          <div style={{display:Admin}}>
                                              <AdminReview/>
                                          </div> 
                                      </div>
                                      
      
      
      
                                      <button type="submit" onClick={this.nextStep} className="btn btn-style-submit mt-5" style={{display:User}}>Guardar</button>
                                  </div> 
      
                              </form> 
                              
      
                          </div>
                          <button type="submit" className="btn btn-style-submit mt-5" style={{display:Admin}}>Enviar Correo</button>
      
                   </div>
                  </div>
              </div>       
            </div>
          );
  }
}
/*export default Inscription;*/
