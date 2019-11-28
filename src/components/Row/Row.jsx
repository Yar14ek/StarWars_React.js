import React from "react";
import ErrorBoundry from "../ErrorBoundry";
export const Row = ({ left, rigth }) => {
  return (
      <div style={{ display: "flex", marginBottom: "40px" }}>
        <ErrorBoundry>{left}</ErrorBoundry>
        <ErrorBoundry>{rigth}</ErrorBoundry>
      </div>
  );
};
export default Row;
