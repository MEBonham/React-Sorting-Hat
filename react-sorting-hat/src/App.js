import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from "../src/components/Banner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gryiffindorScore: 0,
      slytherinScore: 0,
      ravenclawScore: 0,
      hufflepuffScore: 0,
      selectedAnswer: null,
      progress: 0
    };

  }

  advance = event => {
    event.preventDefault();
    this.setState(prevState => ({ progress: prevState.progress + 1 }));
  };

  processAnswer = event => {
    event.preventDefault();
    this.setState(prevState => ({ progress: prevState.progress + 1 }));
  }

  render() {
    return (
      <div className="App">
        <Banner 
          progress={this.state.progress} 
          advance={this.advance} 
          processAnswer={this.processAnswer} 
        />
      </div>
    );
  }
}

export default App;
