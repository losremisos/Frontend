import React, { Component } from 'react';
import './home.css';
import { Home as Admin } from './admin/home';
import { Home as User } from './user/home';




export class Home extends Component {
  render() {
    let admin = localStorage.getItem("admin");
    let window = "";

    if(admin === "true"){
      window=<Admin/>
    }else{
      window=<User/>
    }
    return (
      <div>
        { window }
      </div>
    );
  }
}