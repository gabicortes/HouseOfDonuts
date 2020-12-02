import React from "react";
import "./Catalogue.css";
import grey from "./Grey.jpg";
import lighterGrey from "./lighterGrey.jpg";
import donut from "./donut.png";
import { FaCrown } from "react-icons/fa";

export function Catalogue() {
  return (
    <div>
      <div className="titleLineas">
        <div>Luxury</div>
        <FaCrown />
      </div>
      <div className="LuxuryLine">
        <img className="imageCatalogue2" src={grey} />
        <img className="imageCatalogue2" src={donut} />
        <img className="imageCatalogue2" src={grey} />
        <img className="imageCatalogue2" src={donut} />
        <img className="imageCatalogue2" src={donut} />
        <img className="imageCatalogue2" src={lighterGrey} />
        <img className="imageCatalogue2" src={donut} />
        <img className="imageCatalogue2" src={lighterGrey} />
      </div>

      <div className="titleLineas">Colorful</div>

      <div className="LuxuryLine">
        <img className="imageColorfulCatalogue2" src={donut} />
        <img className="imageColorfulCatalogue2" src={donut} />
        <img className="imageColorfulCatalogue2" src={donut} />
      </div>

      <div className="cakeYPocket">
        <div className="pocket">
          <div className="titleLineas titlecakeypoket">Pocket</div>
          <img className="imagePocketCatalogue2" src={donut} />
        </div>
        <div className="cake">
          <div className="titleLineas titlecakeypoket">Cake</div>
          <img className="imagePocketCatalogue2" src={donut} />
        </div>
      </div>
    </div>
  );
}
