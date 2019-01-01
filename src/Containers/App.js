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
      showSpecies: false,
      showPeople: false,
      showVehicles: false,
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
        <SearchBox />
        <Species show={this.state.showSpecies} />
        <People show={this.state.showPeople} />
        <Vehicles show={this.state.showVehicles} />
        <Planets show={this.state.showPlanets} />
      </div>
    );
  }
}

export default App;
