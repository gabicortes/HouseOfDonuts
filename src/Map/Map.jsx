import React, { useState } from "react";
import "./Map.css";
import MapGL, { Source, Marker, NavigationControl } from "@urbica/react-map-gl";
import { MapBoxKey } from "../MapBox.js";
import "mapbox-gl/dist/mapbox-gl.css";

export function Map() {
  const [toShow, setToShow] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: -34.7190178,
    longitude: -58.2642742,
    zoom: 15,
  });

  const [position, setPosition] = useState({
    longitude: -58.2642742,
    latitude: -34.7190178,
  });

  const style = {
    cursor: "pointer",
    borderRadius: "6px",
    fontSize: "42px",
  };

  function showMap() {
    setToShow((prevValue) => !prevValue);
  }

  const toShowClassname = toShow ? "mapShow" : "noMapShow";

  return (
    <div>
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
        <div className="WraptextTeEsperamos">
          <div className="eachRectangule1">
            La ubicación geográfica <br />
            de la felicidad
          </div>
          <div className="eachRectangule2">Te estamos esperando!</div>
          <div className="eachRectangule3">Conesa 102, Quilmes</div>
        </div>
        <div className="textClickToShowTheMap" onClick={showMap}>
          Click para
          <br /> ver el mapa
        </div>
      </div>
      <div className={toShowClassname}>
        <MapGL
          className="mapGLclassname"
          style={{ width: "100%" }}
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
    </div>
  );
}
