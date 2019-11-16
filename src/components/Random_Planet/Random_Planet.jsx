import React, { Component } from "react";
import SwapiService from "../../services/servisec";
import Spinner from "../Spinner";
import "./style.css";
class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(() => {
        this.updatePlanet()
    }, 3000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  onError = err => {
    console.log(err);
  };
  updatePlanet() {
    const id = Math.floor(Math.random() * 20) + 2;
    this.swapiService
      .getPlanet(id)
      .then(planet => {
        this.setState({
          planet,
          loading: false
        });
      })
      .catch(error => this.onError(error));
  }
  render() {
    const { loading, planet } = this.state;
    const content = loading ? <Spinner /> : <ViewPlanet planet={planet} />;

    return <div className="random-planet  rounded">{content}</div>;
  }
}

const ViewPlanet = ({ planet }) => {
  const { name, population, rotatePeriod, diameter, id } = planet;
  return (
    <React.Fragment>
      <img
        className="plaanet-img"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={`planet: ${name}`}
      />
      <div>
        <h4 className="planet-name">{name}</h4>
        <ul className="list-group list-group-fllush">
          <li className="list-group-item">
            <span className="term">Population: </span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Perion: </span>
            <span>{rotatePeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term"></span>Diameter: <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default RandomPlanet;
