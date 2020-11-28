import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { keyGoogleMaps } from "../KeyGoogleMaps";
import { LocationPin } from "./LocationPin";

export function Map(props) {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: keyGoogleMaps }}
          defaultCenter={props.location}
          defaultZoom={props.zoomLevel}
        >
          <LocationPin
            lat={props.location.lat}
            lng={props.location.lng}
            text={props.location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
