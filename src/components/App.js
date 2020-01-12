import React, { Component } from 'react';
import PokeList from './PokeList';
import './styles/App.css';
import DetailView from './DetailView';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  //in order to keep the context of 'this' we need to bind the handleOnClick

  handleOnClick (id) { //function that will render the pokemon in pokeCell to the detail view
    console.log(id);
  }


  render() {
    return ( //since we are passing down the function through props to pokeCell we need to pass through pokeList first 
      <div className="App"> 
        <PokeList handleOnClick={this.handleOnClick} /> 
        <DetailView />
      </div>
    );
  }
}

export default App;
