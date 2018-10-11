import React, { Component } from "react";
import { Button } from 'reactstrap';

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      character: "",
      quote: "",
      image:"",
    }
  }

  getSimpsonQuote = (character, quote, image) => {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
      .then(response => response.json())
      .then((data) => {
          for(let i = 0; i < data.length; i++) {
            this.setState({character: data[i].character , quote: data[i].quote , image: data[i].image,})
          }
      });
  }

  componentDidMount() {
    this.getSimpsonQuote();
  }

  render() {
    return(           
    <div class="vertical-center">
      <div class="card text-center element">
        <img class="card-img-top"src={this.state.image} alt={this.state.describe}/>
        <div class="card-body">
          <h5 class="card-title">{this.state.character}</h5>
          <p class="card-text">{this.state.quote}</p>
          <Button outline color="success" onClick={this.getSimpsonQuote}>Enjoy !</Button>
        </div>
      </div>
    </div>
    )
  }
}

export default Quote;