import React, { Component } from "react";
import Spinner from "../Spinner";
import "./style.css";
import SwapiService from "../../services/servisec";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>({item[field]})</span>
    </li>
  );
};

export { Record };

export default class ItemDetail extends Component {
  swapiService = new SwapiService();
  state = {
    item: {},
    loader: true
  };
  componentDidMount() {
    this.personUpdate();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.personUpdate();
    }
  }

  personUpdate = () => {
    const id = this.props.personId;
    if (!id) {
      return;
    }
    this.setState({ loader: true });
    this.props
      .getData(id)
      .then(item =>
        this.setState({
          item,
          loader: false
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.loader) {
      return <Spinner />;
    }
    const{item} = this.state
    // const { id, name, img } = this.state.item;
    return (
      <div className="person-details ">
        <img className="person-img" src={`${item.img}${item.id}.jpg`} alt={item.name} />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children,(chaild)=>{
                return React.cloneElement(chaild,{item})
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}


