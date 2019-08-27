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
