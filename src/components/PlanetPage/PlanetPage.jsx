import React, { Component } from "react";
import Row from "../Row/Row";
import ItemList from "../ItemList";
import ItemDetail,{ Record } from "../ItemDetail";
import SwapiService from '../../services/servisec'

class PlanetPage extends Component {
    swapiService = new SwapiService()
  state = {
    personId: 3
  };
  getPersonId(id) {
    this.setState({
      personId: id
    });
  }
  render() {
    const itemList = (
      <ItemList
        getPersonId={id => this.getPersonId(id)}
        getData={this.swapiService.getAllPlanets}
        renderItem={item => (
          <div>
            {item.name}{" "}
            <span style={{ color: "#4d43" }}>(diam:{item.diameter})</span>
          </div>
        )}
      />
    );
    const itemDetail = <ItemDetail 
                        getData = {this.swapiService.getPlanet} 
                        personId={this.state.personId}>

                        <Record field = 'population' label = 'Population' />
                        <Record field = 'rotatePeriod' label = 'Rotate' />
                        <Record field = 'climate' label = 'Climate' />

                    </ItemDetail>;

    return <Row left={itemList} rigth={itemDetail} />;
  }
}

export default PlanetPage;
