import React, { Component, Fragment } from "react";
import RandomPlanet from "../Random_Planet";
import ItemList from "../Iten_List";
import PersonDetail from "../Person_Detail";
class App extends Component {
  state = {
    personId:1
  };
  getPersonId(id){
    this.setState({
      personId:id
    })
  }
  render() {
    return (
      <div style={{width:'1200px',margin:'0 auto'}}>
        <RandomPlanet />
        <div style={{ display: "flex", marginBottom: '40px' }}>
          <ItemList getPersonId={(id)=>this.getPersonId(id)} />
          <PersonDetail personId = {this.state.personId} />
        </div>
      </div>
    );
  }
}

export default App;
