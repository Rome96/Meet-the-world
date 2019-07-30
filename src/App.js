import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Country from "./componets/Country";
import { Countries } from "./api/index";

class App extends React.Component {
  state = {
    countries: [],
    default_filters: [
      "name",
      "capital",
      "flag",
      "currencies",
      "languages",
      "region"
    ],
    selected_filters: {},
    pagina: ""
  };

  componentDidMount() {
    this._fetchCountries(this.state.default_filters);
  }

  _fetchCountries = async filters => {
    const res = await Countries(filters);
    this.setState({ countries: res });
  };

  render() {
    return (
      <Home>
        <Country countries={this.state.countries} />
      </Home>
    );
  }
}

export default App;
