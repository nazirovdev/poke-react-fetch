import React, { Component } from 'react';
import './PokeCard.css';

export default class PokeCard extends Component {
     render() {
          return (
               <div className="card">
                    <div className="pokemon-id">
                         <span>{this.props.id}</span>
                    </div>
                    <div className="pokemon-img">
                         <img
                              src={this.props.image}
                              alt="" />
                    </div>
                    <div className="pokemon-name">
                         <h2>{this.props.name}</h2>
                    </div>
               </div>
          )
     }
}