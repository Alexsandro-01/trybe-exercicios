import { Component } from "react";
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends Component {
  render() {
    return (
      <main>
        { data.map((value) => <Pokemon key={ value.id } poke={ value }/>)}
      </main>
    );
  }
}

export default Pokedex;