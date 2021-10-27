import React, { Component } from 'react'
import PokeCard from './PokeCard';

export default class Pokemon extends Component {
     constructor() {
          super();
          this.state = {
               pokemons: []
          }
     }
     getPokemonObject = async (id) => {
          const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const json = await url.json();
          const response = await json;

          return response;
     }

     async componentDidMount() {
          let data = [];

          for (let i = 1; i <= 100; i++) {
               data.push(await this.getPokemonObject(i));
          }

          this.setState({
               pokemons: data
          })
     }

     getAllPokemon = () => {
          let pokeArr = [];
          let pokemons = this.state.pokemons;

          pokemons.forEach(pokemon => {
               pokeArr.push({ id: pokemon.id, name: pokemon.name, type: pokemon.types, image: pokemon.sprites.other['official-artwork'].front_default })
          })

          return pokeArr;
     }

     render() {
          const pokemons = this.getAllPokemon();
          return pokemons.map(pokemon => {
               return (
                    <PokeCard name={pokemon.name} image={pokemon.image} id={pokemon.id} />
               )
          })
     }
}
