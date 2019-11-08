import React, { Component, Fragment } from "react";
import Spinner from "../Spinner";
import SwapiService from "../../services/servisec";
import "./style.css";
class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: [],
    loader: true,
    page: 1,
    prevPage: "",
    nextPage: ""
  };

  componentDidMount() {
    this.updatePeopleLIste();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.setState({
        loader: true
      });
      this.updatePeopleLIste();
    }
  }

  updatePeopleLIste = () => {
    this.swapiService
      .getAllPioples(this.state.page)
      .then(({ peopleList, prevPage, nextPage }) => {
        const prev = prevPage !== null ? prevPage.match(/[0-9]/): null;
        const next = nextPage !== null ? nextPage.match(/[0-9]/) : null;
        this.setState({
          peopleList,
          prevPage: prev,
          nextPage: next,
          loader: false
        });
      })
      .catch(er => console.log(er));
  };

  nextPage = () => {
    this.setState({
      page: this.state.nextPage
    });
  };

  prevPage = () => {
    this.setState({
      page: this.state.prevPage
    });
  };

  itemRender = arr => {
    return arr.map(people => {
      let id = this.swapiService._extractId(people);
      return (
        <li
          key={id}
          className="list-group-item list-item"
          onClick={() => this.props.getPersonId(id)}
        >
          {people.name}
        </li>
      );
    });
  };

  render() {
    const { peopleList, loader, prevPage, nextPage } = this.state;

    const disablePrevpage = prevPage === null ? "disabled" : null;
    const disableNextpage = nextPage === null ? "disabled" : null;

    const listItem = loader ? (
      <Spinner />
    ) : peopleList ? (
      this.itemRender(peopleList)
    ) : null;

    return (
      <Fragment>
        <ul className="list list-group">{listItem}</ul>
        <div className = 'button-block'>
          <div>{`Page: ${this.state.page}`}</div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.prevPage()}
            disabled={disablePrevpage}
          >
            Prew Page
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.nextPage()}
            disabled={disableNextpage}
          >
            Next Page
          </button>
        </div>
      </Fragment>
    );
  }
}
export default ItemList;
