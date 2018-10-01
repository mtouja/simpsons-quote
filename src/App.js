import React, { Component } from 'react';
import './App.css';
import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      working: false
    }  
  }
  handleClick = () => {
    this.setState({working: !this.state.working});//a chaque click on modifie l'état.
  };
  render() {
    const homerWorking = this.state.working ? 'Homer is working' : 'Donuts break';
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/341817/homer_top-center.svg" className={this.state.working ? "App-logo-speed-up" : "App-logo"} alt="logo" />
          <h1 className="App-title">'J'accepte de ne pas tout comprendre'</h1>
        </header>
        <p>{homerWorking}</p>
          <button onClick={this.handleClick}><p>Homer{}</p></button>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Lamp on />
        <Lamp/>
      </div>
    );
  }
}

export default App;
