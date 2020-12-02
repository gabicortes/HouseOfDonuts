import React, { Component } from "react";
import "./Map2.css";
import GoogleMapReact from "google-map-react";
import { GoogleMapsKey } from "../KeyBingMap";
import { VscLocation } from "react-icons/vsc";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -34.7190178,
      lng: -58.2627505,
    },
    zoom: 17,
  };

  render() {
    return (
      <div className="MapGoogleMaps">
        <div className="textDirection">
          <div>
            <VscLocation className="vectorLocation" />
          </div>
          <div className="textTeEsperamosEnConesa102">
            Te esperamos en <br />
            Conesa 102
          </div>
        </div>
        <div style={{ height: "450px", width: "40%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GoogleMapsKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent lat={-34.7190178} lng={-58.2627505} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
