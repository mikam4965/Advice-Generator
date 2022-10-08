import './style.css';
import React, { Component } from 'react';
import MyImage from "./img/icon-dice.svg"
import logo from "./img/pattern-divider-desktop.svg";
import axios from 'axios'

class App extends Component {

  state = {
    advice: '',
    id: ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        const { id } = response.data.slip;
        this.setState({ advice });
        this.setState({ id });
      })

      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { advice } = this.state;
    const { id } = this.state;
    return (
      <div className="hero">
        <div className="container">
          <div className="number">
            <p>Advice #{this.state.id}</p>
          </div>
          <div className="quote">
            <h2>"{this.state.advice}"</h2>
          </div>
          <div className="logo">
            <img src={logo} />
          </div>
          <button onClick={this.fetchAdvice}>
            <img src={MyImage} />
          </button>
        </div>
      </div>
    )
  }
}

export default App;