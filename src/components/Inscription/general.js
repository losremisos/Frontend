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
import axios from 'axios';
import { relative } from 'path';

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
          text:"Enviar Correcciones",
          aprovaciones : 0,
          percentage: 0,
          information :[[],[],[],[],[],[],[],[],[]],
          extrausers:[],
          users:[],
          inscriptioninfo: [],
          submit: "0",
          submit1:"0",
          submit2:"0",
          submit3:"0",
          submit4:"0",
          submit5:"0",
          submit6:"0",
          submit7:"0",
          submit8:"0",
          load: false,
          numsubmit: 0
        }
        this.nextStep = this.nextStep.bind(this)
        this.getData = this.getData.bind(this)
        this.makeaprovation = this.makeaprovation.bind(this)
      }
      
      nextStep() {

        this.setState({ submit: "1" ,submit1: "1", submit2: "1" , submit3: "1", submit4: "1",submit5: "1", submit6: "1",submit7:"1",submit8:"1"})
       
      }
      
      getData(value){
        this.setState({ 
            information: value, load:false
        })   
        console.log(this.state.numsubmit);
        if(this.state.numsubmit===7){
        this.userbasica();  
        }else{
           this.state.numsubmit = this.state.numsubmit + 1;
           console.log(this.state.numsubmit);
           
        } 

    }
    makeaprovation(val){
        if(val===true){
            this.state.aprovaciones+=1;
        }else{
            if(this.state.aprovaciones-1 >=0){
                this.state.aprovaciones+= -1
            }
        }
        if(this.state.aprovaciones===9){
            this.setState({text:"Enviar Citacion"});
        }else{
            this.setState({text:"Enviar Correcion"});
        }
    }
    fillbarra(){
        var j = this.state.information.length;
        var total = 0;
        var notfill = 0;
        var minus = [0,0,0,0,0,0,0,0,0]
        if(this.state.information[2][0]===false){
            minus[2] = -1;
        }
        if(this.state.information[3][0]===false){
            minus[3] = -6;
        }
        if(this.state.information[4][0]===false){
            minus[4] = -10;
        }
        if(this.state.information[5][15]===false){
            minus[5] = -10;
        }
        if(this.state.information[6][15]===false){
            minus[6] = -10;
        }
        if(this.state.information[7][0]===false){
            minus[7] = -11;
        }
        console.log(this.state.information[8]);
        for(var i = 0; i < j;i++){
            var l = this.state.information[i].length + minus[i];
            console.log(l);
            total += l;
            for(var k = 0; k < l ; k++){
                if (this.state.information[i][k]==="" || this.state.information[i][k]=== null){
                    notfill+=1;
                    console.log(i," ",k);
                }
            }
        }
        
        let fill = total - notfill;
        let por = fill*100/total
        console.log(total);
        console.log(notfill);
        this.setState({ percentage: por })
    }
    fatherinfo(){
        let id = localStorage.getItem("UsrID");
        const{
            information,
        } = this.state;
        axios
        .put("http://localhost:4200/relative/"+id,
        {
          relative: {
            tipo_documento_familiar: information[5][0],
            documento_familiar: information[5][1],
            primer_nombre_familiar: information[5][2],
            primer_apellido_familiar: information[5][3],
            segundo_apellido_familiar: information[5][4],
            fecha_nacimiento_familiar: information[5][5],
            esta_vivo_familiar: information[5][6],
            estado_civil_familiar: information[5][7],
            tiene_cedula_militar_familiar: information[5][9],
            direccion_familiar: information[5][10],
            pais_familiar: information[7][9],
            departamento_familiar: information[5][12],
            municipio_familiar: information[5][13],
            telefono_familiar: information[5][14],
            esta_trabajando_familiar: information[5][15],
            nombre_trabajo_familiar: information[5][16],
            empresa_trabajo_familiar: information[5][17],
            cargo_trabajo_familiar: information[5][18],
            tipo_trabajador_familiar: information[5][19],
            fecha_ingreso_trabajo_familiar: information[5][20],
            direccion_trabajo_familiar: information[5][21],
            pais_trabajo_familiar: information[5][22],
            departamento_trabajo_familiar: information[5][23],
            municipio_trabajo_familiar: information[5][24],

            telefono_trabajo_familiar: information[6][25]//acuerdeme q cambie esto
            

        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
          console.log("LOOOOOOOOOOOOOOL");
          this.setState({ 
           submit:"0",submit1: "0" , submit2: "0", submit3: "0", submit4: "0",submit5: "0", submit6: "0",submit7:"0",submit8:"0"
        })   
          this.componentDidMount();
        }).catch(error => {
          console.log("registration error", error);
        });
  
      }
    inscriptioninfo(){
        let id = localStorage.getItem("UsrID");
        const{
            information,
        } = this.state;
        axios
        .put("http://localhost:4200/inscription_information/"+id,
        {
          information: {
            cursa_educacion_basica: information[2][0],
            nivel_educacion_basica: information[2][1],
            institucion_educacion_basica: information[2][2],
            terminacion_educacion_basica: information[2][3],
            cursa_educacion_superior: information[3][0],
            //modalidad
            nombre_carrera: information[3][2],
            semestre_educacion_superior: information[3][3],
            //graduado
            institucion_educacion_superior: information[3][5],

            esta_trabajando: information[4][0],
            nombre_trabajo: information[4][1],
            empresa_trabajo: information[4][2],
            cargo_trabajo: information[4][3],
            tipo_trabajador: information[4][4],
            fecha_ingreso_trabajo: information[4][5],
            direccion_trabajo: information[4][6],
            pais_trabajo: information[4][7],
            departamento_trabajo: information[4][8],
            municipio_trabajo: information[4][9],
            telefono_trabajo: information[4][10]

        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
          console.log("SI HUJISAISAASS");
          this.fatherinfo();
        }).catch(error => {
          console.log("registration error", error);
        });
  
      }
      userextra(){
        let id = localStorage.getItem("UsrID");
        const{
            information,
        } = this.state;
        axios
        .put("http://localhost:4200/user_extra_info/"+id,
        {
          params: {
            fecha_exp: information[0][12],
            pais_exp: information[0][13],
            dpto_exp: information[0][14],
            ciudad_exp: information[0][15],
            genero: information[0][16],
            nacionalidad: information[0][17],
            doble_nacionalidad: information[0][18],
            retornado_de_exterior: information[0][19],
            excepciones_de_ley: information[0][21],
           
            pais_residencia: information[1][1],
            depto_residencia: information[1][2],
            municipio_residencia: information[1][3],
            telefono_fijo: information[1][4],
            tipo_vivienda: information[1][6],
            estrato_vivienda: information[1][7],
            pertenece_red_unidos: information[1][8],
            sisben: information[1][9],
            esta_cargo_icbf: information[1][10],
            estatura: information[1][11],
            peso: information[1][12],
            grupo_sanguineo: information[1][13],
            factor_rh: information[1][14],
            num_hijos: information[1][15],
            estado_civil: information[1][16],

            tiene_hermano: information[7][0],
            dependencia_economica: information[8][0]
            
        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
          console.log("SI HUJISAISAASS");
          this.inscriptioninfo();
        }).catch(error => {
          console.log("registration error", error);
        });
  
      }
    userbasica(){
        let id = localStorage.getItem("UsrID");
        const{
            information,
        } = this.state;
        axios
        .put("http://localhost:4200/users/"+id,
        {
          user: {
            fechaNacimiento: information[0][8],
            departamento: information[0][10],
            ciudad: information[0][11]
        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
          this.userextra();
        }).catch(error => {
          console.log("registration error", error);
        });
  
      }

      changeState(){
        let id = localStorage.getItem("UsrID");
        axios
        .put("http://localhost:4200/users/"+id,
        {
          user: {
            estadoProceso: 0,
        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
        }).catch(error => {
          console.log("registration error", error);
        });
  
      }

    componentDidMount(){
        let admin = localStorage.getItem("admin");
        let id = localStorage.getItem("UsrID");
        if(admin === "true"){
            id = localStorage.getItem("AuxID");
        }
        axios({
            method: "GET",
            url: "http://localhost:4200/users/"+id
        }).then((res) => {
            this.setState({
                users: res.data,
            })
            axios({
                method: "GET",
                url: "http://localhost:4200/user_extra_info/"+id
            }).then((res) => {
                this.setState({
                    extrausers: res.data.data,
                 })
                axios({
                    method: "GET",
                    url: "http://localhost:4200/inscription_information/"+id
                }).then((res) => {
                    this.setState({
                        inscriptioninfo: res.data.data,
                    })
                    axios({
                        method: "GET",
                        url: "http://localhost:4200/relative/"+id
                    }).then((res) => {
                        this.setState({
                            relative: res.data.data,
                        })
                        const {users} = this.state;
                        const {extrausers} = this.state;
                        const {inscriptioninfo} = this.state;
                        const {relative} = this.state;
                        let copyinformation = this.state.information;
                        copyinformation[0]=["Registro Civil","Documento Identidad",users.tipoDocumento,users.documento,"Tarjeta Identidad",users.nombre,users.primerApellido,users.segundoApellido,users.fechaNacimiento,"Pais Nacimiento",users.departamento,users.ciudad,extrausers.fecha_exp,extrausers.pais_exp,extrausers.dpto_exp,extrausers.ciudad_exp,extrausers.genero,extrausers.nacionalidad,extrausers.doble_nacionalidad,extrausers.retornado_de_exterior,users.email,extrausers.excepciones_de_ley,"AVATAR"];
                        copyinformation[1]=[extrausers.direccion,extrausers.pais_residencia,extrausers.depto_residencia,extrausers.municipio_residencia,"Telefono Fijo",extrausers.telefono_movil,extrausers.tipo_vivienda,extrausers.estrato_vivienda,extrausers.pertenece_red_unidos,extrausers.sisben,extrausers.esta_cargo_icbf,extrausers.estatura,extrausers.peso,extrausers.grupo_sanguineo,extrausers.factor_rh,extrausers.num_hijos,extrausers.estado_civil]
                        copyinformation[2]=[inscriptioninfo.cursa_educacion_basica,inscriptioninfo.nivel_educacion_basica,inscriptioninfo.institucion_educacion_basica,inscriptioninfo.terminacion_educacion_basica,"Certificado Educacion Basica"]
                        copyinformation[3]=[inscriptioninfo.cursa_educacion_superior,"Modalidad",inscriptioninfo.nombre_carrera,inscriptioninfo.semestre_educacion_superior,"Graduado",inscriptioninfo.institucion_educacion_superior,"Certificado Educacion Superior"]
                        copyinformation[4]=[inscriptioninfo.esta_trabajando,inscriptioninfo.nombre_trabajo,inscriptioninfo.empresa_trabajo,inscriptioninfo.cargo_trabajo,inscriptioninfo.tipo_trabajador,inscriptioninfo.fecha_ingreso_trabajo,inscriptioninfo.direccion_trabajo,inscriptioninfo.pais_trabajo,inscriptioninfo.departamento_trabajo,inscriptioninfo.municipio_trabajo,inscriptioninfo.telefono_trabajo]
                        copyinformation[5]=[relative.tipo_documento_familiar,relative.documento_familiar,relative.primer_nombre_familiar,relative.primer_apellido_familiar,relative.segundo_apellido_familiar,relative.fecha_nacimiento_familiar,relative.esta_vivo_familiar,relative.estado_civil_familiar,"Documento Padre",relative.tiene_cedula_militar_familiar,relative.direccion_familiar,relative.pais_familiar,relative.departamento_familiar,relative.municipio_familiar,relative.telefono_familiar,relative.esta_trabajando_familiar,relative.nombre_trabajo_familiar,relative.empresa_trabajo_familiar,relative.cargo_trabajo_familiar,relative.tipo_trabajador_familiar,relative.fecha_ingreso_trabajo_familiar,relative.direccion_trabajo_familiar,relative.pais_trabajo_familiar,relative.departamento_trabajo_familiar,relative.municipio_trabajo_familiar,relative.telefono_trabajo_familiar]
                        copyinformation[6]=[relative.tipo_documento_familiar,relative.documento_familiar,relative.primer_nombre_familiar,relative.primer_apellido_familiar,relative.segundo_apellido_familiar,relative.fecha_nacimiento_familiar,relative.esta_vivo_familiar,relative.estado_civil_familiar,"Documento Madre",relative.tiene_cedula_militar_familiar,relative.direccion_familiar,relative.pais_familiar,relative.departamento_familiar,relative.municipio_familiar,relative.telefono_familiar,relative.esta_trabajando_familiar,relative.nombre_trabajo_familiar,relative.empresa_trabajo_familiar,relative.cargo_trabajo_familiar,relative.tipo_trabajador_familiar,relative.fecha_ingreso_trabajo_familiar,relative.direccion_trabajo_familiar,relative.pais_trabajo_familiar,relative.departamento_trabajo_familiar,relative.municipio_trabajo_familiar,relative.telefono_trabajo_familiar]
                        copyinformation[7]=[extrausers.tiene_hermano,relative.tipo_documento_familiar, relative.documento_familiar,relative.primer_nombre_familiar,relative.primer_apellido_familiar,relative.segundo_apellido_familiar,relative.fecha_nacimiento_familiar,relative.nombre_trabajo_familiar,relative.direccion_familiar,relative.pais_familiar,relative.departamento_familiar,relative.municipio_familiar];
                        copyinformation[8]=[extrausers.dependencia_economica];
                        
                        this.setState({load:true,information:copyinformation})  
                        this.fillbarra();
                    });
                });
            });
            
            
        });
        
    }

    
  render() {
        const {users} = this.state;
        const {extrausers} = this.state;
        console.log(users);
        console.log(this.state.information)
        console.log("AAAAAAAAAA");
        var Admin;
        var User;
        var AllData;
        var disabled;
          
        let admin = localStorage.getItem("admin");
        if(admin === "true"){
            User = "none";
            Admin = "block";
            AllData="none";
            disabled = true;
        }else{
            if(this.state.percentage===100){
                AllData="block";
            }else{
                AllData="none";
            }
            User = "block";
            Admin = "none";
            disabled = false;
            
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
                                            <BasicInfo getDatos={this.getData} information={this.state.information} submit={this.state.submit} load={this.state.load} dis={disabled}/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                            <AdminReview review={this.makeaprovation}/>
                                      </div> 
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_12" role="button" aria-expanded="false" aria-controls="collapse_12">Información Adicional</a>
                                      <div className="collapse" id="collapse_12">
                                          <div className="card card-body">                                  
                                            <AdditionalInfo getDatos={this.getData} information={this.state.information} submit={this.state.submit1}  load={this.state.load}  dis={disabled}/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                            <AdminReview review={this.makeaprovation}/>
                                      </div>                  
                                     
                                      
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
                                              <AcademicInfo getDatos={this.getData} information={this.state.information} submit={this.state.submit2}  dis={disabled} load={this.state.load}/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                      <AdminReview review={this.makeaprovation}/>
                                      </div> 
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_22" role="button" aria-expanded="false" aria-controls="collapse_22">Educación Superior</a>
                                      <div className="collapse" id="collapse_22">
                                          <div className="card card-body">                                  
                                              <HigherEducationInfo  dis={disabled} getDatos={this.getData} information={this.state.information} submit={this.state.submit3} load={this.state.load}/>
                                          </div>
                                      </div> 
                                      <div style={{display:Admin}}>
                                      <AdminReview review={this.makeaprovation}/>
                                      </div> 
                                      
                                  </div>  
                              </form>
      
                          </div>
      
                          <a className="btn mb-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_30" role="button" aria-expanded="false" aria-controls="collapse_30">Información Laboral</a>
      
                          <form>
                              <div className="collapse" id="collapse_30">
                                  <div className="card card-body">               
                                      <WorkingInfo  dis={disabled} getDatos={this.getData} information={this.state.information} submit={this.state.submit4} load={this.state.load}/>  
                                      <div style={{display:Admin}}>
                                      <AdminReview review={this.makeaprovation}/>
                                      </div>                  
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
                                              <FatherInfo  dis={disabled} getDatos={this.getData} information={this.state.information} submit={this.state.submit5} load={this.state.load} form={5}/>
                                          </div>
                                          <div style={{display:Admin}}>
                                          <AdminReview review={this.makeaprovation}/>
                                          </div>  
                                      </div>
                                      
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_42" role="button" aria-expanded="false" aria-controls="collapse_42">Información del Padre</a>
                                      <div className="collapse" id="collapse_42">
                                          <div className="card card-body">                                  
                                              <FatherInfo  dis={disabled} getDatos={this.getData} information={this.state.information} submit={this.state.submit6} load={this.state.load} form={6}/>
                                          </div>
                                          <div style={{display:Admin}}>
                                          <AdminReview review={this.makeaprovation}/>
                                          </div> 
                                      </div>
                                       
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_43" role="button" aria-expanded="false" aria-controls="collapse_43">Información de los Hermanos</a>
                                      <div className="collapse" id="collapse_43">
                                          <div className="card card-body">                                  
                                              <SiblingInfo  dis={disabled} getDatos={this.getData} information={this.state.information} submit={this.state.submit7} load={this.state.load}/>
                                          </div>
                                          <div style={{display:Admin}}>
                                          <AdminReview review={this.makeaprovation}/>
                                          </div> 
                                      </div>
                                       
      
                                      <a className="btn  mt-1 text-left btn-style btn-block" data-toggle="collapse" href="#collapse_44" role="button" aria-expanded="false" aria-controls="collapse_44">Dependencia</a>
                                      <div className="collapse" id="collapse_44">
                                          <div className="card card-body">                                  
                                              <DependenceInfo  dis={disabled} getDatos={this.getData} information={this.state.information} submit={this.state.submit8} load={this.state.load}/>
                                          </div>
                                          <div style={{display:Admin}}>
                                          <AdminReview review={this.makeaprovation}/>                                          </div> 
                                      </div>
                                      
      
      
      
                                    </div> 
      
                              </form> 
                              
      
                          </div>
                          <button type="submit" onClick={this.nextStep} className="btn btn-style-submit mt-5" style={{display:User}}>Guardar</button>
                          <button type="submit" onClick={this.changeState} className="btn btn-style-submit mt-5" style={{display:AllData}}>Enviar</button>
                          <button type="submit" className="btn btn-style-submit mt-5" style={{display:Admin}}>{this.state.text}</button>
      
                   </div>
                  </div>
              </div>       
            </div>
          );
  }
}
/*export default Inscription;*/
