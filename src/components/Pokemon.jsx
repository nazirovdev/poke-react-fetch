import React, { Component } from 'react'
import PokeCard from './PokeCard';

export default class Pokemon extends Component {
     constructor() {
          super();
          this.state = {
               pokemons: [],
               isLoading: true
          }
     }

     getPokemonObject = async (id) => {
          const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const json = await url.json();
          const response = await json;

          return response;
     }

     getPokemons = async () => {
          const pokeArr = [];

          for (let i = 1; i <= 300; i++) {
               pokeArr.push(await this.getPokemonObject(i))
          }

          this.setState({
               pokemons: pokeArr,
               isLoading: false
          })
     }

     componentDidMount() {
          this.getPokemons();
     }

     render() {
          return (
               this.state.isLoading 
               ?
               <div className="isLoading"><h1>Mohon Tunggu Sebentar...</h1></div>
               :
               this.state.pokemons.map(pokemon => {
                    const {front_default: image} = pokemon.sprites.other['official-artwork']
                    const { id, name } = pokemon;
     
                    return <PokeCard key={id} id={id} image={image} name={name}/>
               })
          )
     }
}
