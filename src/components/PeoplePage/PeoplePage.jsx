import React, { Component } from "react";
import ItemList from "../ItemList";
import ItemDetail, { Record } from "../ItemDetail";
import Row from "../Row/Row";
import { WithSwapiServise } from "../hocHalper";

class PeoplePage extends Component {
  state = {
    itemId: 1
  };

  getPersonId(id) {
    this.setState({
      itemId: id
    });
  }

  render() {
    const { getAllPioples, getPerson } = this.props.swapiService;
    
    const itemList = (
      <ItemList
        getPersonId={id => this.getPersonId(id)}
        getData={getAllPioples}
        renderItem={item => (
          <div>
            {item.name}
            <span style={{ color: "#4d43" }}>{item.birth_year}</span>
          </div>
        )}
      />
    );

    const itemDetail = (
      <ItemDetail getData={getPerson} personId={this.state.itemId}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetail>
    );

    return <Row left={itemList} rigth={itemDetail} />;
  }
}

export default WithSwapiServise(PeoplePage);
