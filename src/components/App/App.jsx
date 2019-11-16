import React, { Component } from "react";
import PeoplePage from '../PeoplePage'
import PlanetPage from '../PlanetPage'
class App extends Component {
  render() {
    return (
      <div>
        <PeoplePage/>
        <PlanetPage/>
      </div>
    );
  }
}

export default App;
