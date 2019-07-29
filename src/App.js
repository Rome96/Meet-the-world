import React from "react";
import Country from "./componets/Country";
import { fetchNameCountry, Countries } from "./api/index";

class App extends React.Component {
  state = {
    countries: []
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(paises => {
        this.setState({
          countries: paises
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <Country country={this.state.countries} />
      </React.Fragment>
    );
  }
}

export default App;
