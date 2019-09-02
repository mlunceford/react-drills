import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      teams: ['jazz', 'lakers', 'celtics', 'hornets', 'nuggeets']
    }
  }
  handleChange(value) {
    this.setState({ message: value });
  }
  render() {
    const teamNames = this.state.teams
      .filter((e, i) => {
        return e.includes(this.state.message);
      })
      .map((e, i) => {
        return <h2 key={i}> {e}</h2>
      })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        <h1>{teamNames}</h1>
      </div>
    );
  }
}

export default App;

//this one we went over with andrew i might have something a little off 

// import React,  from 'react';
// import'./App.css';

// export default class App extends Component{
//   constructor{
//     super()

//     this.state={
//       list: ['yes','no', 'keep', 'all', 'start', 'tree'],
//       filter: ''
//     }
//   }
//   render(){
//     let list = this.state.list.map((element, index)=>{
//       return <li key={index}>{element}</li>
//     })
//     let list = this.state.list.filter((element, index)=>{
//       if element.includes(this.state.filter){
//         return true
//       }
//     }) .map((element, index)=> {
//       return <li key={index}>{element}</li>
//     })
//     return(
//       <div className='App'>
//         <input onChange={e => this.handleChange(e.target.value)} type='text'/>
//         <ul>
//           {list}
//         </ul>
//       </div>
//     )
//   }
// }