import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    state = {
        coordinate: {
            lat: null,
            lng: null
        },
        zoom: 11,
        loading: true
    }

    componentDidMount () {
       this.setState({ coordinate: { lat: this.props.lat, lng: this.props.lng }, loading: false  })
    }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        {
            this.state.loading ? <span>Cargando...</span>
            :  <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDEY_XcA8R8MtkD3N94hb5zCU9pXRrM8Bs' }}
                    defaultCenter={this.state.coordinate}
                    defaultZoom={this.state.zoom}
                >
                </GoogleMapReact>
        }
      </div>
    );
  }
}

export default Map;