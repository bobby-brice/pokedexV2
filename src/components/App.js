import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from './Pokemon';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {} //takes the data out of our resolved Promise (fetch) so we can pass it through props to DetailView
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  //in order to keep the context of 'this' we need to bind the handleOnClick

  handleOnClick (id) { //function that will render the pokemon in pokeCell to the detail view after api call
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const pokemon = new Pokemon(data);
        this.setState({ pokemon }) //setState takes an object as an argument
        console.log(pokemon);
      })
      .catch(err => console.log(err));
  }


  render() {
    return ( //since we are passing down the function through props to pokeCell we need to pass through pokeList first 
      <div className="App"> 
        <PokeList handleOnClick={this.handleOnClick} /> 
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
