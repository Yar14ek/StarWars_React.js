import React, { Component } from "react";
import Row from "../Row/Row";
import ItemList from "../ItemList";
import ItemDetail, { Record } from "../ItemDetail";
import { WithSwapiServise } from "../hocHalper";

class PlanetPage extends Component {
  state = {
    personId: 3
  };

  getPersonId(id) {
    this.setState({
      personId: id
    });
  }

  render() {
    const { getAllPlanets, getPlanet } = this.props.swapiService;

    const itemList = (
      <ItemList
        getPersonId={id => this.getPersonId(id)}
        getData={getAllPlanets}
        renderItem={item => (
          <div>
            {item.name}{" "}
            <span style={{ color: "#4d43" }}>(diam:{item.diameter})</span>
          </div>
        )}
      />
    );
    
    const itemDetail = (
      <ItemDetail getData={getPlanet} personId={this.state.personId}>
        <Record field="population" label="Population" />
        <Record field="rotatePeriod" label="Rotate" />
        <Record field="climate" label="Climate" />
      </ItemDetail>
    );

    return <Row left={itemList} rigth={itemDetail} />;
  }
}

export default WithSwapiServise(PlanetPage);
