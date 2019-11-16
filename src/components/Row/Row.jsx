import React from "react";
import RandomPlanet from "../Random_Planet";
import ErrorBoundry from "../ErrorBoundry";
export const Row = ({ left, rigth }) => {
  return (
    <div style={{ width: "1200px", margin: "0 auto" }}>
      <RandomPlanet />
      <div style={{ display: "flex", marginBottom: "40px" }}>
        <ErrorBoundry>{left}</ErrorBoundry>
        <ErrorBoundry>{rigth}</ErrorBoundry>
      </div>
    </div>
  );
};
export default Row;
