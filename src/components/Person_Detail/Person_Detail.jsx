import React, { Component,Fragment } from "react";
import Spinner from '../Spinner'
import "./style.css";
import SwapiService from "../../services/servisec";

class PersonDetail extends Component {
  swapiService = new SwapiService();
  state = {
    person: {},
    loader:true
  };
  componentDidMount() {
    setTimeout(() => {
      
      this.personUpdate();
    }, 2000);
  }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.personUpdate()
        }
    }

  personUpdate = () => {
    const  id  = this.props.personId;
    if (!id) {
      return;
    }
    this.setState({loader:true})
    this.swapiService
      .getPerson(id)
      .then(person => this.setState({ 
          person,
          loader:false 
        }))
      .catch(err => console.log(err));
  };

  render() {
      const load = this.state.loader? <Spinner/>:<DetailCard person = {this.state.person}/>
      return (
          <div className="person-details ">
        {load}
      </div>
    );
}
}

const DetailCard=(props)=>{
    const { id, name, gender, birthYear, eyeColor } = props.person;
    return(
        <Fragment>
            <img
          className="person-img"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{` ${gender}`}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{` ${birthYear}`}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color:</span>
              <span>{` ${eyeColor}`}</span>
            </li>
          </ul>
        </div>
        </Fragment>
    )
}
export default PersonDetail;
