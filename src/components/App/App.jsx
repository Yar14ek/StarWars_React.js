import React, { Component } from "react";
import RandomPlanet from "../Random_Planet";
import PeoplePage from "../PeoplePage";
import PlanetPage from "../PlanetPage";
import StarshipPage from '../StarshipPage'
import Header from "../Headeer";
import SwapiService from "../../services/servisec";
import { SwapiServiceProvider } from "../swapi-services-context";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  swapiService = new SwapiService();
  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div style={{ width: "1200px", margin: "0 auto" }}>
            <Header />
            <RandomPlanet />
            <Route path="/" exact render={()=><h2>Welkom to StarWars DB</h2>} />
            <Route path="/starship" component={StarshipPage} />
            <Route path="/people" component={PeoplePage}  />
            <Route path="/planet" component={PlanetPage} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;
