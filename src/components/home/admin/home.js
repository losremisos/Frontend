import React from 'react';
import './home.css';
import { GET } from './../../../JS/api';
import { Link } from "react-router-dom";
import { Loading } from "./../../loading/loading";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    GET('/users').then((res) => {
      this.setState({
        users: res.data,
        loading: false,
      });
      let usersrevision = []
      var j = 0
      for(var i = 0; i<this.state.users.length; i++){
         if(this.state.users[i].estadoProceso === 0){
          if(this.state.users[i].tipoUsuario === 0){
           usersrevision[j] = this.state.users[i];
           usersrevision[j].estadoProceso = "Revision";
           j +=1;
          }
         }
      }
      this.setState({
        users: usersrevision,
      });
    }).catch((err) => console.log(err));
  };

  renderUsers() {
    const { users } = this.state;
    console.log(users)
    return (
      <div className="user-box">
        <div className="container-fluid main-container">
          <div className="jumbotron">
            <div id="listTitle" className="text-rigth">Lista de Usuarios</div>

            <hr></hr>
            <div className="users">
              {users.map(user =>
                <div key={user.id} className="media border p-3">
                  <div className="media-body">
                    <div id='usersTitle'>{user.nombre}</div>

                    <div className='users-grid'>
                      <div className='users-date'>
                        <small><i>{user.primerApellido} {user.segundoApellido}</i></small>
                      </div>

                      <div className='users-like'>
                        <i  /> {user.estadoProceso}
                      </div>

                      <Link to='/inscription'>
                        <div onClick={() => {localStorage.setItem("AuxID", user.id)}}>Más información</div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { loading } = this.state;
    const loadingWindow = <Loading/>;
    
    return (
      <div>
        {loading ? loadingWindow : this.renderUsers()}
      </div>
    );
  }
}