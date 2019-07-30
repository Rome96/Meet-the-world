import React from "react";
import "../index.css";

import Navbar from "../componets/navbar";

const Home = props => {
  return (
    <React.Fragment>
      <Navbar />
      <div >
            {props.children}
      </div>
    </React.Fragment>
  );
};

export default Home;
