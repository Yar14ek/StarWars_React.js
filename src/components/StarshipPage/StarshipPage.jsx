import React, { Component } from "react";
import ItemList from "../ItemList";
import ItemDetail from "../ItemDetail";
import Row from "../Row";
import SwapiService from "../../services/servisec";

class StarshipPage extends Component {
  swapiService = new SwapiService();
  state = {};
  render() {
    const itemList = <ItemList />;
    const detail = <ItemDetail />;
    return <Row left={itemList} rigth={detail} />;
  }
}

export default StarshipPage;
