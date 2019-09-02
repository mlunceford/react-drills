import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      food: ['son', 'of', 'a', 'sasquatch'] 
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.food[0]}</h1>
        <h1>{this.state.food[1]}</h1>
        <h1>{this.state.food[2]}</h1>
        <h1>{this.state.food[3]}</h1>
      </div>
    );
  }
}

export default App;


// this one works also i just need to learn .map
// import React, { Component } from 'react'
// import './App.css'
// ​
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       list: ['colors', 'cars', 'movies', 'people', 'andrew', 'It Chapter 2', 'Hereditary', 'trees']
//     }
//   }
// ​
//   render() {
// ​
//     let list = this.state.list.map((element, index) => {
//       return <li key={index}>{element}</li>
//     })
// ​
//     return (
//       <div className="App">
//         <p>Andrew</p>
//         <ul>
//           {list}
//         </ul>
//       </div>
//     )
//   }
// }
// ​
// export default App