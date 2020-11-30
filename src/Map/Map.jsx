import React from "react";
import { KeyBingMap } from "../KeyBingMap.js";
import BingMap from "./BingMap/BingMap";
import "./Map.css";
import { VscLocation } from "react-icons/vsc";

export function Map() {
  return (
    <div className="mapBingWrapper">
      <div className="adressLocal">
        <VscLocation className="locationIconVector" />
        <div>
          Te esperamos en <br />
          Conesa 102, Quilmes.
        </div>
      </div>
      <BingMap
        className="mapBing"
        mapOptions={{
          lat: -34.7191,
          lng: -58.26212,
          credentials: KeyBingMap,
        }}
      />
    </div>
  );
}
