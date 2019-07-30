import React from "react";
import { Modal, Button } from "react-bootstrap";
import { countryByName } from "../api";
import Map from "./Map";

class ModalComponent extends React.Component {
  state = {
    country_detail: {}
  };

  componentDidMount() {
    this._fetchCountryInformation(this.props.country_name);
  }

  _fetchCountryInformation = async name => {
    const country_detail = await countryByName(name);
    this.setState({ country_detail: country_detail[0] });
  };

  render() {
		const { country_detail } = this.state;
    return (
      <Modal show={this.props.visible} onHide={this.props.onClose}>
        <Modal.Header>
          <Modal.Title>{country_detail.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Subregion: {country_detail.subregion}</p>
          <p>Population: {country_detail.population}</p>
          <p>
            Borders:
            {country_detail.hasOwnProperty("borders") &&
            country_detail.borders.length > 0
              ? country_detail.borders.map(border => <p>{border}</p>)
              : null}
          </p>
					{
						country_detail.latlng && country_detail.latlng.length > 0 ? 
							<Map 
								lat={ country_detail.latlng[0] }
								lng={ country_detail.latlng[1] }
							/>
						: null
					}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
