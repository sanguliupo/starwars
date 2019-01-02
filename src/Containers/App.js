import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import Species from '../Components/Species';
import People from '../Components/People';
import Vehicles from '../Components/Vehicles';
import Planets from '../Components/Planets';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: '',
      showSpecies: false,
      showPeople: false,
      showVehicles: false,
      showPlanets: false
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Star Wars React App</h1>
        <button
          onClick={() => {
            this.setState({
              showSpecies: true,
              showPeople: false,
              showVehicles: false,
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
              showVehicles: false,
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
              showVehicles: true,
              showPlanets: false
            });
          }}
        >
          Vehicles
        </button>

        <button
          onClick={() => {
            this.setState({
              showSpecies: false,
              showPeople: false,
              showVehicles: false,
              showPlanets: true
            });
          }}
        >
          Planets
        </button>
        <SearchBox searchChange={this.onSearchChange} />

        <Species
          show={this.state.showSpecies}
          searchfield={this.state.searchfield}
        />
        <People
          show={this.state.showPeople}
          searchfield={this.state.searchfield}
        />
        <Vehicles
          show={this.state.showVehicles}
          searchfield={this.state.searchfield}
        />
        <Planets
          show={this.state.showPlanets}
          searchfield={this.state.searchfield}
        />
      </div>
    );
  }
}

export default App;
