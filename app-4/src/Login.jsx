import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',

    };
  }
  alertLogin(){
    alert(`Username: ${this.state.user} Password: ${this.state.pass} `) 
  }
  handleChange(yes){
    this.setState({user: yes});
  }
  handleChangePass(no){
    this.setState({pass: no})
  }

  render(){
    return(
      <div>
        <input onChange={e => this.handleChange(e.target.value)} type='text' placeholder='Username' />
        <input onChange={e => this.handleChangePass(e.target.value)} type='text' placeholder='PassWord'/>
        <button onClick={e => this.alertLogin()}>Login</button>
      </div>
    )
  }
}