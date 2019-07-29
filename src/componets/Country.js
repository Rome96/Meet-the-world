import React from "react";

class Country extends React.Component {
  render() {
      //const {countries} = this.props
    return (
      <div>
        {this.props.countries}
       
      </div>
    );
  }
}

export default Country;
