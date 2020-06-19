import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const Spiner = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={30}
      width={100}
      timeout={3000}
    />
  );
};

export default Spiner;
