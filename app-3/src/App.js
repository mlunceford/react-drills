import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: '',
      teams: ['jazz', 'lakers', 'celtics', 'hornets', 'nuggeets']
    }
  }
  handleChange(value){
    this.setState({message: value});
  }
  render() {
    const teamNames = this.state.teams
    .filter((e,i) => {
      return e.includes(this.state.message);
    })
    .map((e,i)=>{
      return <h2 key={i}> {e}</h2>
    })  
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type='text'/>
        <h1>{teamNames}</h1>
      </div>
    );
  }
}

export default App;
