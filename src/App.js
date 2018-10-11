import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Quote from "./Quote";

class App extends Component {
  render() {
    return(
      <div>
        <Quote />
      </div>
    );
  }
}
  
export default App;
