import React from "react";
import "./styles/card.css";

class Country extends React.Component {
  render() {
    const { countries } = this.props;
    return (
        <div className="col-12 p-5 row">
          {countries.map(country => (
            <div className="card">
              <img src={country.flag} class="" alt="flag" />
              <div className="card-body">
                <h3> {country.name}</h3>
                <p>{country.capital}</p>
                <p>{country.region}</p>
              </div>
            </div>
          ))}
        </div>
    );
  }
}

export default Country;
