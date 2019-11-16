import React,{Component} from 'react';
import Row from '../../components/Row/Row'
import ItemList from '../../components/ItemList'
import PersonDetail from '../../components/ItemDetail'
import SwapiService from "../../services/servisec";

class PeoplePage extends Component{
    swapiService = new SwapiService();
    state = {
      personId: 1
    };
    render(){
        const itemList = <ItemList
        getPersonId={id => this.getPersonId(id)}
        getData={this.swapiService.getAllPioples}
        renderItem = {(item)=>(<div>{item.name} <span style={{color:'#4d43'}}>{item.gender}</span> </div>)}
      />
        return(
            <Row left={itemList} rigth={<PersonDetail/>}/>
        )
    }
}
export default PeoplePage;