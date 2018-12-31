import React, { Component } from 'react';
import Species from '../Components/Species';
import People from '../Components/People';
import Films from '../Components/Films';
import Planets from '../Components/Planets';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpecies: false,
      showPeople: false,
      showFilms: false,
      showPlanets: false
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars React App</h1>

        <button
          onClick={() => {
            this.setState({
              showSpecies: true,
              showPeople: false,
              showFilms: false,
              showPlanets: false
            });
          }}
        >
          Species
        </button>

        <button
          onClick={() => {
            this.setState({
              showSpecies: false,
              showPeople: true,
              showFilms: false,
              showPlanets: false
            });
          }}
        >
          People
        </button>

        <button
          onClick={() => {
            this.setState({
              showSpecies: false,
              showPeople: false,
              showFilms: true,
              showPlanets: false
            });
          }}
        >
          Films
        </button>

        <button
          onClick={() => {
            this.setState({
              showSpecies: false,
              showPeople: false,
              showFilms: false,
              showPlanets: true
            });
          }}
        >
          Planets
        </button>

        <Species show={this.state.showSpecies} />
        <People show={this.state.showPeople} />
        <Films show={this.state.showFilms} />
        <Planets show={this.state.showPlanets} />
      </div>
    );
  }
}

export default App;
