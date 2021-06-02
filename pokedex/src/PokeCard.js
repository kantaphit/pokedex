import React from "react";

class PokeCard extends React.Component {
  render() {
    const { id, name, type, base_exp } = this.props;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <h3>{`type: ${type}`}</h3>
        <h3>{`exp: ${base_exp}`}</h3>
      </div>
    );
  }
}

export default PokeCard;
