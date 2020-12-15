import React, { useState } from "react";
import "./Map.css";
import MapGL, { Source, Marker, NavigationControl } from "@urbica/react-map-gl";
import { MapBoxKey } from "../MapBox.js";
import { GoLocation } from "react-icons/go";
import "mapbox-gl/dist/mapbox-gl.css";

export function Map() {
  const [viewport, setViewport] = useState({
    latitude: -34.7189258,
    longitude: -58.2628004,
    zoom: 16,
  });

  const [position, setPosition] = useState({
    longitude: -58.2628004,
    latitude: -34.7189258,
  });

  const style = {
    cursor: "pointer",
    borderRadius: "6px",
    fontSize: "42px",
  };

  return (
    <div className="mapWrapper">
      <div className="map">
        <MapGL
          style={{ width: "100%", height: "400px" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          accessToken={MapBoxKey}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={setViewport}
          scrollZoom={false}
        >
          <Source
            id="contours"
            type="vector"
            url="mapbox://mapbox.mapbox-terrain-v2"
          />

          <Marker longitude={position.longitude} latitude={position.latitude}>
            <a
              target="_blank"
              title="Hacé click acá!"
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.google.com/maps/place/House+of+Donuts/@-34.7190134,-58.2642742,17z/data=!3m1!4b1!4m5!3m4!1s0x95a32fa2694c03b7:0xc2e86677655d128f!8m2!3d-34.7190922!4d-58.2621362"
            >
              <div style={style}>📍</div>
            </a>
          </Marker>
          <NavigationControl showCompass showZoom position="top-right" />
        </MapGL>
      </div>
      <div className="textTeEsperamos">
        Te esperamos
        <br />
        en Conesa 102, Quilmes
        <br />
        <br />{" "}
        <GoLocation className="locationIcon">
          <a
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.google.com/maps/place/House+of+Donuts/@-34.7190134,-58.2642742,17z/data=!3m1!4b1!4m5!3m4!1s0x95a32fa2694c03b7:0xc2e86677655d128f!8m2!3d-34.7190922!4d-58.2621362"
          />
        </GoLocation>
      </div>
    </div>
  );
}
