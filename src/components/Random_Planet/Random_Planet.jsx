import React, { Component } from "react";
import SwapiService from "../../services/servisec";

class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
      planet:{}
  };
  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 10) + 2;
    this.swapiService.getPlanet(id).then(planet => {
      this.setState({planet});
    });
  }

  render() {
    const { planet:{name, population, rotationPeriod, diametr, id} } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="plaanet-img"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="Yavin IV"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-fllush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Perion</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term"></span>Diametr<span>{diametr}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RandomPlanet;
