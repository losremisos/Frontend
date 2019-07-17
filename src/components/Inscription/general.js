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
import { serverLink } from './../../JS/api.js';


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
          relativem:[],
          relativef:[],
          relativeb:[],
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
        this.changeState = this.changeState.bind(this);
      }
      
      nextStep() {

        this.setState({ submit: "1" ,submit1: "1", submit2: "1" , submit3: "1", submit4: "1",submit5: "1", submit6: "1",submit7:"1",submit8:"1"})
       
      }
      
      getData(value){
        this.setState({ 
            information: value, load:false
        })   
        console.log(this.state.numsubmit);
        console.log(this.state.information);
        if(this.state.numsubmit===8){
        this.userbasica();  
        this.state.numsubmit = 0;
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
        console.log(this.state.information[5]);
        console.log(this.state.information[6]);
        console.log(this.state.information[7]);
        
        for(var i = 0; i < j;i++){
            var l = this.state.information[i].length + minus[i];
            console.log(l);
            total += l;
            console.log("FILA",i);
            for(var k = 0; k < l ; k++){
                if (this.state.information[i][k]==="" || this.state.information[i][k]=== null){
                    notfill+=1;
                    console.log(i," ",k);
                }
            }
        }
        if(this.state.information[2][0]===false){
          if (this.state.information[2][4]!="" || this.state.information[2][4]!= null){
            notfill-=1;
        }
      }
        
        let fill = total - notfill;
        let por = fill*100/total
        console.log(total);
        console.log(notfill);
        this.setState({ percentage: por })
    }
    broinfo(){
      let id = localStorage.getItem("UsrID");
      const{
          information,
      } = this.state;
      axios
      .put(serverLink+"relatives/"+id+"/2",
      {
        relative: {
          tipo_documento_familiar: information[7][1],
          documento_familiar: information[7][2],
          primer_nombre_familiar: information[7][3],
          primer_apellido_familiar: information[7][4],
          segundo_apellido_familiar: information[7][5],
          fecha_nacimiento_familiar: information[7][6],
          direccion_familiar: information[7][8],
          pais_familiar: information[7][9],
          departamento_familiar: information[7][10],
          municipio_familiar: information[7][11],
          nombre_trabajo_familiar: information[7][7],
                        
                        
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

    motherinfo(){
      let id = localStorage.getItem("UsrID");
      const{
          information,
      } = this.state;
      axios
      .put(serverLink+"relatives/"+id+"/1",
      {
        relative: {
          tipo_documento_familiar: information[6][0],
          documento_familiar: information[6][1],
          primer_nombre_familiar: information[6][2],
          primer_apellido_familiar: information[6][3],
          segundo_apellido_familiar: information[6][4],
          fecha_nacimiento_familiar: information[6][5],
          esta_vivo_familiar: information[6][6],
          estado_civil_familiar: information[6][7],
          documento_identidad: information[6][8],
          tiene_cedula_militar_familiar: information[6][9],
          direccion_familiar: information[6][10],
          pais_familiar: information[6][11],
          departamento_familiar: information[6][12],
          municipio_familiar: information[6][13],
          telefono_familiar: information[6][14],
          esta_trabajando_familiar: information[6][15],
          nombre_trabajo_familiar: information[6][16],
          empresa_trabajo_familiar: information[6][17],
          cargo_trabajo_familiar: information[6][18],
          tipo_trabajador_familiar: information[6][19],
          fecha_ingreso_trabajo_familiar: information[6][20],
          direccion_trabajo_familiar: information[6][21],
          pais_trabajo_familiar: information[6][22],
          departamento_trabajo_familiar: information[6][23],
          municipio_trabajo_familiar: information[6][24],
          telefono_trabajo_familiar: information[6][25]
      }
      }, { withCredentials: true}
      )
      .then(response => {     
        console.log("registration res", response);
        console.log("SI HUJISAISAASS");
        this.broinfo();
      }).catch(error => {
        console.log("registration error", error);
      });

    }

    fatherinfo(){
        let id = localStorage.getItem("UsrID");
        const{
            information,
        } = this.state;
        axios
        .put(serverLink+"relatives/"+id+"/0",
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
            documento_identidad: information[6][8],
            tiene_cedula_militar_familiar: information[5][9],
            direccion_familiar: information[5][10],
            pais_familiar: information[5][11],
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
            telefono_trabajo_familiar: information[5][25]
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
        .put(serverLink+"inscription_information/"+id,
        {
          information: {
            cursa_educacion_basica: information[2][0],
            nivel_educacion_basica: information[2][1],
            institucion_educacion_basica: information[2][2],
            terminacion_educacion_basica: information[2][3],
            cursa_educacion_superior: information[3][0],
            nombre_carrera: information[3][2],
            semestre_educacion_superior: information[3][3],
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
          this.motherinfo();
        }).catch(error => {
          console.log("registration error", error);
        });
  
      }
      userextra(){
        console.log(this.state.information);
        let id = localStorage.getItem("UsrID");
        const{
            information,
        } = this.state;
        console.log(information);
        axios
        .put(serverLink+"user_extra_info/"+id,
        {
          params: {
            registro_civil: information[0][0],
            documento_identidad: information[0][1],
            numero_ti: information[0][4],
            pais_nacimiento: information[0][9],
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

            educacion_basica: information[2][4],

            modalidad: information[3][1],
            graduado: information[3][4],
            educacion_superior: information[3][6],


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
        .put(serverLink+"users/"+id,
        {
          user: {
            fechaNacimiento: information[0][8],
            departamento: information[0][10],
            ciudad: information[0][11],
            avatar: information[0][22]
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
        let admin = localStorage.getItem("admin");
        if(admin==="true"){
            let process = 1;
            if(this.state.aprovaciones===9){
                process = 3;
            }
            let id = localStorage.getItem("AuxID");
            axios
            .put(serverLink+"users/"+id,
            {
              user: {
                estadoProceso: process,
            }
            }, { withCredentials: true}
            )
            .then(response => {     
              console.log("registration res", response);
            }).catch(error => {
              console.log("registration error", error);
            });
            
        }else{
        let id = localStorage.getItem("UsrID");
        axios
        .put(serverLink+"users/"+id,
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
      }

    componentDidMount(){
        let admin = localStorage.getItem("admin");
        let id = localStorage.getItem("UsrID");
        if(admin === "true"){
            id = localStorage.getItem("AuxID");
        }
        axios({
            method: "GET",
            url: serverLink+"users/"+id
        }).then((res) => {
            this.setState({
                users: res.data,
            })
            axios({
                method: "GET",
                url: serverLink+"user_extra_info/"+id
            }).then((res) => {
                this.setState({
                    extrausers: res.data.data,
                 })
                axios({
                    method: "GET",
                    url: serverLink+"inscription_information/"+id
                }).then((res) => {
                    this.setState({
                        inscriptioninfo: res.data.data,
                    })
                    axios({
                        method: "GET",
                        url: serverLink+"relatives/"+id+"/0"
                    }).then((res) => {
                        this.setState({
                            relativef: res.data.data[0],
                        })
                        axios({
                          method: "GET",
                          url: serverLink+"relatives/"+id+"/1"
                      }).then((res) => {
                          this.setState({
                              relativem: res.data.data[0],
                          })
                          axios({
                            method: "GET",
                            url: serverLink+"relatives/"+id+"/2"
                        }).then((res) => {
                            this.setState({
                                relativeb: res.data.data[0],
                            })
                            const {users} = this.state;
                            const {extrausers} = this.state;
                            const {inscriptioninfo} = this.state;
                            const {relativef} = this.state;
                            const {relativem} = this.state;
                            const {relativeb} = this.state;
                            let copyinformation = this.state.information;
                            copyinformation[0]=[extrausers.registro_civil,extrausers.documento_identidad,users.tipoDocumento,users.documento,extrausers.numero_ti,users.nombre,users.primerApellido,users.segundoApellido,users.fechaNacimiento,extrausers.pais_nacimiento,users.departamento,users.ciudad,extrausers.fecha_exp,extrausers.pais_exp,extrausers.dpto_exp,extrausers.ciudad_exp,extrausers.genero,extrausers.nacionalidad,extrausers.doble_nacionalidad,extrausers.retornado_de_exterior,users.email,extrausers.excepciones_de_ley,users.avatar];
                            copyinformation[1]=[extrausers.direccion,extrausers.pais_residencia,extrausers.depto_residencia,extrausers.municipio_residencia,extrausers.telefono_fijo,extrausers.telefono_movil,extrausers.tipo_vivienda,extrausers.estrato_vivienda,extrausers.pertenece_red_unidos,extrausers.sisben,extrausers.esta_cargo_icbf,extrausers.estatura,extrausers.peso,extrausers.grupo_sanguineo,extrausers.factor_rh,extrausers.num_hijos,extrausers.estado_civil]
                            copyinformation[2]=[inscriptioninfo.cursa_educacion_basica,inscriptioninfo.nivel_educacion_basica,inscriptioninfo.institucion_educacion_basica,inscriptioninfo.terminacion_educacion_basica,extrausers.educacion_basica]
                            copyinformation[3]=[inscriptioninfo.cursa_educacion_superior,extrausers.modalidad,inscriptioninfo.nombre_carrera,inscriptioninfo.semestre_educacion_superior,extrausers.graduado,inscriptioninfo.institucion_educacion_superior,extrausers.educacion_superior]
                            copyinformation[4]=[inscriptioninfo.esta_trabajando,inscriptioninfo.nombre_trabajo,inscriptioninfo.empresa_trabajo,inscriptioninfo.cargo_trabajo,inscriptioninfo.tipo_trabajador,inscriptioninfo.fecha_ingreso_trabajo,inscriptioninfo.direccion_trabajo,inscriptioninfo.pais_trabajo,inscriptioninfo.departamento_trabajo,inscriptioninfo.municipio_trabajo,inscriptioninfo.telefono_trabajo]
                            copyinformation[5]=[relativef.tipo_documento_familiar,relativef.documento_familiar,relativef.primer_nombre_familiar,relativef.primer_apellido_familiar,relativef.segundo_apellido_familiar,relativef.fecha_nacimiento_familiar,relativef.esta_vivo_familiar,relativef.estado_civil_familiar,relativef.documento_identidad,relativef.tiene_cedula_militar_familiar,relativef.direccion_familiar,relativef.pais_familiar,relativef.departamento_familiar,relativef.municipio_familiar,relativef.telefono_familiar,relativef.esta_trabajando_familiar,relativef.nombre_trabajo_familiar,relativef.empresa_trabajo_familiar,relativef.cargo_trabajo_familiar,relativef.tipo_trabajador_familiar,relativef.fecha_ingreso_trabajo_familiar,relativef.direccion_trabajo_familiar,relativef.pais_trabajo_familiar,relativef.departamento_trabajo_familiar,relativef.municipio_trabajo_familiar,relativef.telefono_trabajo_familiar]
                            copyinformation[6]=[relativem.tipo_documento_familiar,relativem.documento_familiar,relativem.primer_nombre_familiar,relativem.primer_apellido_familiar,relativem.segundo_apellido_familiar,relativem.fecha_nacimiento_familiar,relativem.esta_vivo_familiar,relativem.estado_civil_familiar,relativem.documento_identidad,relativem.tiene_cedula_militar_familiar,relativem.direccion_familiar,relativem.pais_familiar,relativem.departamento_familiar,relativem.municipio_familiar,relativem.telefono_familiar,relativem.esta_trabajando_familiar,relativem.nombre_trabajo_familiar,relativem.empresa_trabajo_familiar,relativem.cargo_trabajo_familiar,relativem.tipo_trabajador_familiar,relativem.fecha_ingreso_trabajo_familiar,relativem.direccion_trabajo_familiar,relativem.pais_trabajo_familiar,relativem.departamento_trabajo_familiar,relativem.municipio_trabajo_familiar,relativem.telefono_trabajo_familiar]
                            copyinformation[7]=[extrausers.tiene_hermano,relativeb.tipo_documento_familiar, relativeb.documento_familiar,relativeb.primer_nombre_familiar,relativeb.primer_apellido_familiar,relativeb.segundo_apellido_familiar,relativeb.fecha_nacimiento_familiar,relativeb.nombre_trabajo_familiar,relativeb.direccion_familiar,relativeb.pais_familiar,relativeb.departamento_familiar,relativeb.municipio_familiar];
                            copyinformation[8]=[extrausers.dependencia_economica];
                            
                            this.setState({load:true,information:copyinformation})  
                            this.fillbarra();
                        });
                      });
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
            if(users.estadoProceso != 1){
              disabled = true;
            }else{
              disabled = false;
            }
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
                          <button type="submit" onClick={this.changeState} className="btn btn-style-submit mt-5" style={{display:Admin}}>{this.state.text}</button>
      
                   </div>
                  </div>
              </div>       
            </div>
          );
  }
}
/*export default Inscription;*/
