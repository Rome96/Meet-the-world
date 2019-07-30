import React from "react";
import "../index.css";

import Navbar from "../componets/navbar";
import Map from "../componets/Map";

const Home = props => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row justify-content-center">
            {props.children}
      </div>
    </React.Fragment>
  );
};

export default Home;
