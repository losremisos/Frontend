import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    console.log("Aqui esta la peticion");
    console.log(axios.get('http://localhost:4200/districts/1'));
    axios({
      method: "GET",
      url: "http://localhost:4200/districts/1"
    }).then((res) => {
      this.setState({
        users: res.data
      })
    })
  }

  render() {
    const {users} = this.state;
    return (
      <BrowserRouter>
        <div>
            {users.ciudad}
        </div>
      </BrowserRouter>
    )
  }
}