import PokeCard from "./PokeCard";
import React from "react";

class PokeDex extends React.Component {
  static defaultProps = {
    pokeDexs: [
      { id: 4, name: "Charmander", type: "fire", base_exp: 62 },
      { id: 7, name: "Squirtle", type: "water", base_exp: 63 },
      { id: 11, name: "Metapod", type: "bug", base_exp: 72 },
      { id: 12, name: "Butterfly", type: "flying", base_exp: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_exp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_exp: 95 },
      { id: 94, name: "Gengar", type: "poison", base_exp: 225 },
      { id: 133, name: "Eevee", type: "normal", base_exp: 65 },
    ],
  };
  render() {
    return (
      <div>
        <h1>PokeDex</h1>
        {this.props.pokeDexs.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              base_exp={pokemon.base_exp}
            />
          );
        })}
      </div>
    );
  }
}

export default PokeDex;
