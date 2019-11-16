import React, { Component } from "react";
import ItemList from "../ItemList";
import ItemDetail, { Record } from "../ItemDetail";
import Row from "../Row/Row";
import SwapiService from "../../services/servisec";

class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    itemId: 1
  };
  getPersonId(id) {
    this.setState({
      itemId: id
    });
  }
  render() {
    const itemList = (
      <ItemList
        getPersonId={id => this.getPersonId(id)}
        getData={this.swapiService.getAllPioples}
        renderItem={item => (
          <div>
            {item.name}{" "}
            <span style={{ color: "#4d43" }}>{item.birth_year}</span>
          </div>
        )}
      />
    );
    const itemDetail = (
      <ItemDetail
        getData={this.swapiService.getPerson}
        personId={this.state.itemId}>
            <Record field = 'gender' label = 'Gender'/>
            <Record field = 'birthYear' label = 'Birth Year'/>
            <Record field = 'eyeColor' label = 'Eye Color'/>
        </ItemDetail>
    );

    return <Row left={itemList} rigth={itemDetail} />;
  }
}

export default PeoplePage;
