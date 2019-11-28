import React, { Component } from "react";
import ItemList from "../ItemList";
import ItemDetail,{Record} from "../ItemDetail";
import Row from "../Row/Row";
import { WithSwapiServise } from "../hocHalper";


class StarshipPage extends Component {
  state = {
    starShipId:'3'
  };
  getPersonId(id){
  this.state({
    starShipId:id
  })
}

  render() {
    const{getAllStarShips, getStarship}=this.props.swapiService

    const itemList = <ItemList
    getPersonId={id=>this.getPersonId(id)}
    getData={getAllStarShips}
    renderItem={item=>(
      <div>{item.name}</div>
    )}
     />;
    const detail = <ItemDetail 
    getData={getStarship}
    personId={this.state.starShipId}>
      <Record field='name' label ="Name" />
      {/* <Record field='' label ="" />
      <Record field='' label ="" /> */}
    </ItemDetail>
    
    


    return <Row left={itemList} rigth={detail} />;
  }
}

export default WithSwapiServise(StarshipPage);
