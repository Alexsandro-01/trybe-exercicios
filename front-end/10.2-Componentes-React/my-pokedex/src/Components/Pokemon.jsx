import { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { poke } = this.props;

    return (
      <section className="card">
        <div>
          <p>{poke.name}</p>
          <p>{poke.type}</p>
          <p>Average weight: {poke.averageWeight.value} {poke.averageWeight.measurementUnit}</p>
        </div>
        <img src={poke.image} alt={poke.name} />
      </section>
    );
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}

export default Pokemon;