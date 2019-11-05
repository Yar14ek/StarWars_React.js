import React, { Component } from "react";
import SwapiService from "../../services/servisec";
class ItemList extends Component {
  swapiService = new SwapiService();
  
  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
    .getAllPioples()
    .then(peopleList => {
      this.setState({
        peopleList
      });
    })
    .catch(er=>console.log(er))
  }
  takeItem=(id)=>{
    console.log(id)
  }
  itemRender=(arr)=>{

     return arr.map((people)=>{
       let id = this.swapiService._extractId(people)
       return(
         <li key = {id} 
         className='list-group-item'
         onClick={()=>this.takeItem(id)} >{people.name}</li>
       )
     })
    }
    
    render() {
const{peopleList}=this.state
const item = peopleList? this.itemRender(peopleList):null

    return( <ul className="item-list list-group">
    {item}
    </ul>
    )
  }
}
export default ItemList;
