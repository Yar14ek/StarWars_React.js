import React, {Fragment} from "react";
import Spinner from "../Spinner";
import WithData from '../hocHalper'
import "./style.css";

const ItemList = ({
  state,
  getPersonId,
  getId,
  renderItem,
  prevPageF,
  nextPageF
}) => {
  const { data, prevPage, nextPage, page, loader } = state;
  const disablePrevpage = prevPage === null ? "disabled" : null;
  const disableNextpage = nextPage === null ? "disabled" : null;

  const itemRender = arr => {
    return arr.map(item => {
      let id = getId(item);
      let label = renderItem(item);
      return (
        <li
          key={id}
          className="list-group-item list-item"
          onClick={() => getPersonId(id)}
        >
          {label}
        </li>
      );
    });
  };
  const item = loader ? <Spinner /> : data ? itemRender(data) : null;
 
  return (
    <Fragment>
      <ul className="list list-group">{item}</ul>
      <div className="button-block">
        <div>{`Page: ${page}`}</div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => prevPageF()}
          disabled={disablePrevpage}
        >
          Prew Page
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => nextPageF()}
          disabled={disableNextpage}
        >
          Next Page
        </button>
      </div>
    </Fragment>
  );
};

export default WithData(ItemList);
