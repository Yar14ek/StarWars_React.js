import React, { Component } from "react";
import SwapiService from "../../services/servisec";
const WithData = View => {
  return class extends Component {
    swapiService = new SwapiService();

    state = {
      data: null,
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
      this.props
        .getData(this.state.page)
        .then(({ itemList, prevPage, nextPage }) => {
          const prev = prevPage !== null ? prevPage.match(/[0-9]/) : null;
          const next = nextPage !== null ? nextPage.match(/[0-9]/) : null;
          this.setState({
            data: itemList,
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

    render() {
      return (
        <View
          {...this.props}
          state={this.state}
          getId={this.swapiService._extractId}
          nextPageF={this.nextPage}
          prevPageF={this.prevPage}
        />
      );
    }
  };
};
export default WithData;
