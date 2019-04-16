import React, { Component } from "react";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import Display from "./display/Display";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  render() {
    return (
      <div className="App">
        <Display {...this.state} />
        <Dashboard
          hit={this.hit}
          foul={this.foul}
          strike={this.strike}
          ball={this.ball}
        />
      </div>
    );
  }

  hit = () => {
    this.setState({ strikes: 0, balls: 0 });
  };

  foul = () => {
    this.setState(prevState => {
      if (prevState.strikes >= 2) {
        return prevState;
      }
      return {
        ...prevState,
        strikes: (prevState.strikes += 1)
      };
    });
  };

  strike = () => {
    this.setState(prevState => ({
      ...prevState,
      strikes: prevState.strikes + 1 === 3 ? 0 : (prevState.strikes += 1)
    }));
  };

  ball = () => {
    this.setState(prevState => ({
      ...prevState,
      balls: prevState.balls + 1 === 4 ? 0 : (prevState.balls += 1)
    }));
  };
}

export default App;
