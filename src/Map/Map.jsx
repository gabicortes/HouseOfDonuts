import React from "react";
import { KeyBingMap } from "../KeyBingMap.js";
import BingMap from "./BingMap/BingMap";
import "./Map.css";

export function Map() {
  return (
    <div className="mapBingWrapper">
      <div>Te esperamos en Conesa 102, Quilmes.</div>
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
