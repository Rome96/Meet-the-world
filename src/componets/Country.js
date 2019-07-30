import React from "react";
import "./styles/card.css";
import ModalComponent from "./Modal";

class Country extends React.Component {
  state = {
    modalVisible: false,
    current_country_name: ""
  };

  _handleModalVisible = country => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      current_country_name: this.state.modalVisible ? '' : country.name
    });
  };

  render() {
    const { countries } = this.props;
    return (
      <div className="col-12 p-5 row">
        {countries.map(country => (
          <div
            className="card"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => this._handleModalVisible(country)}
          >
            <img src={country.flag} class="" alt="flag" />
            <div className="card-body">
              <h3> {country.name}</h3>
              <p>{country.capital}</p>
              <p>{country.region}</p>
            </div>
          </div>
        ))}
        {this.state.modalVisible ? (
          <ModalComponent
            visible={this.state.modalVisible}
            onClose={this._handleModalVisible}
            country_name={this.state.current_country_name}
          />
        ) : null}
      </div>
    );
  }
}

export default Country;
