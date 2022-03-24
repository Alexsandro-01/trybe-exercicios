// App.js
import React from 'react';
import './App.css';
import Inputs from './Test-inputs/Inputs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <section>
          {joke}
        </section>
        <section>
          <Inputs />
        </section>
      </div>
    );
  }
}

export default App;