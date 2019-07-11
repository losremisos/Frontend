import React from 'react';
import './home.css';
import axios from 'axios';

import SourceImg from './../../../assets/home/tabPic.png'
import SourceImg2 from './../../../assets/home/tabPic6.png'
import SourceImg3 from './../../../assets/home/faq.jpg'
import SourceImg4 from './../../../assets/home/escudo.png'




export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        users: [],
        id_user: ""
    }
    this.createinscriptioninfo = this.createinscriptioninfo.bind(this);
    this.createextrainfo = this.createextrainfo.bind(this);
    this.createrelativefather = this.createrelativefather.bind(this);
    this.createrelativemother = this.createrelativemother.bind(this);
}
  componentDidMount(){
    let id = localStorage.getItem("UsrID");
    console.log("Aqui esta la peticion");
    console.log(axios({
        method: "GET",
        url: "http://localhost:4200/users/"+id
    }));
    axios({
        method: "GET",
        url: "http://localhost:4200/users/"+id
    }).then((res) => {
        this.setState({
            users: res.data,
            id_user: id
        })
    });
}
notfirstsession(){
  let id = localStorage.getItem("UsrID");
        const{
          
        } = this.state;
        axios
        .put("http://localhost:4200/users/"+id,
        {
          user: {
            first_session: false
        }
        }, { withCredentials: true}
        )
        .then(response => {     
          console.log("registration res", response);
          this.createinscriptioninfo();
  
        }).catch(error => {
          console.log("registration error", error);
        });
    
}
createextrainfo(){
  console.log("Extra");
  const{
    id_user
  } = this.state;
  axios
  .post("http://localhost:4200/user_extra_info",
  {
    params: {
      user_id: id_user
    }
  }, { withCredentials: true}
  )
  .then(response => {     
    console.log("registration res", response);
    this.createrelativefather();
  }).catch(error => {
    console.log("registration error", error);
  });
}
createrelativefather(){
  console.log("Father");
  const{
    id_user
  } = this.state;
  axios
  .post("http://localhost:4200/relative",
  {
    relative: {
      user_id: id_user,
      tipo_familiar: "0"
    }
  }, { withCredentials: true}
  )
  .then(response => {     
    console.log("registration res", response);
    this.createrelativemother();

  }).catch(error => {
    console.log("registration error", error);
  });
  
}
createrelativemother(){
  console.log("Mother");
  const{
    id_user
  } = this.state;
  axios
  .post("http://localhost:4200/relative",
  {
    relative: {
      user_id: id_user,
      tipo_familiar: "1"
    }
  }, { withCredentials: true}
  )
  .then(response => {     
    console.log("registration res", response);
    
  }).catch(error => {
    console.log("registration error", error);
  });
  
}
createinscriptioninfo(){
  console.log("Inscription");
  const{
    id_user
  } = this.state;
  axios
  .post("http://localhost:4200/inscription_information",
  {
    information: {
      user_id: id_user
    }
  }, { withCredentials: true}
  )
  .then(response => {     
    console.log("registration res", response);
    this.createextrainfo();
  }).catch(error => {
    console.log("registration error", error);
  });

}
  render() {
    const {users} = this.state;
    console.log(users);
    if(users.first_session === true){
      this.notfirstsession();
    }
    return (
      <div>
        <div className="container">
          <div className="col-md-12a">
          </div>
          <div className="row">
            <div className="col-md-12 services">
              <div className="row">
                <div className="col-md-12 ourservices">
                  <span id="TitleOurServices" className="control-label">Nuestros Servicios Tarjeta Militar</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 services-main-box">
                  <div className="row">
                    <div className="col-md-4 styleImg2">
                      <img src={SourceImg4} alt="Escudo_Ejercito" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-12 faq">
              <div className="row">
                <div className="col-md-3 style">
                  <img src={SourceImg3} alt="Question" />
                </div>
                <div className="col-md-6">
                  <div className="spacer"></div>
                  <p className="style">
                    <b>
                      <span id="MainContent_lblFaqs" className="control-label">Preguntas Frecuentes</span>
                    </b>
                  </p>
                  <p className="style">
                    <span id="MainContent_lblFaqsAnswers" className="control-label">Encuentre respuestas a las preguntas más comunes de nuestros usuarios.</span>
                  </p>
                </div>
                <div className="col-md-2 style">
                  <div className="spacer"></div>
                  <div className="half-spacer"></div>
                  <a className="btn send">Ir a preguntas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}