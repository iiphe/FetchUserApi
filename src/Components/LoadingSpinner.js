import React from "react"
import { ImSpinner10 } from "react-icons/im";


function LoadingSpinner() {
  return (
    <div className="spinner__box">
      <ImSpinner10 className="spinner" />
      <h2>Loading...</h2>
    </div>
  );
};
export default LoadingSpinner;


 