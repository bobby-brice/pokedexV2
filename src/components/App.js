import React, { Component } from 'react';
import PokeList from './PokeList';
import './styles/App.css';
import DetailView from './DetailView';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <PokeList />
        <DetailView />
      </div>
    );
  }
}

export default App;
