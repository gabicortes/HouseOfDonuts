import React from "react";
import "./Catalogue.css";
import donut from "./donut.png";
import { FaCrown } from "react-icons/fa";

export function Catalogue() {
  return (
    <div>
      <div className="titleLineas">
        <div>Luxury</div>
        <FaCrown className="crownEmoticon" />
      </div>
      <div className="LuxuryLine">
        <img className="imageCatalogue2 donut2" src={donut} />
        <img className="imageCatalogue2 donut4" src={donut} />
        <img className="imageCatalogue2 donut5" src={donut} />
        <img className="imageCatalogue2 donut7" src={donut} />
        <div className="imageCatalogue2 donut1">
          <div className="textDescriptionDonut">
            COBERTURA DE CHOCOLATE CON TOPPING Y RELLENO BON O BON.
          </div>
        </div>
        <div className="donut3 imageCatalogue2">
          <div className="textDescriptionDonut">
            COBERTURA DE CHOCOLATE BLANCO CON OREO Y RELLENO DE DULCE DE LECHE.
          </div>
        </div>
        <div className="imageCatalogue2 donut6">
          <div className="textDescriptionDonut">
            COBERTURA DE CHOCOLATE CON TOPPING Y RELLENO MARROC.
          </div>
        </div>
        <div className="imageCatalogue2 donut8">
          <div className="textDescriptionDonut">
            COBERTURA DE CHOCOLATE CON FERRERO ROCHER Y RELLENO NUTELLA.
          </div>
        </div>
      </div>
      <div className="titleLineas">Colorful</div>

      <div className="colorfulLine">
        <img className="imageColorfulCatalogue2 donut9" src={donut} />
        <img className="imageColorfulCatalogue2 donut10" src={donut} />
        <img className="imageColorfulCatalogue2 donut11" src={donut} />
        <div className="imageColorfulCatalogue2 donut12">
          <div className="textDescriptionDonutColor">
            DONUT CON COBERTURA DE CHOCOLATE CELESTE.
          </div>
        </div>
        <div className="imageColorfulCatalogue2 donut13">
          <div className="textDescriptionDonutColor">
            DONUT CON COBERTURA DE CHOCOLATE AMARILLO.
          </div>
        </div>
        <div className="imageColorfulCatalogue2 donut14">
          <div className="textDescriptionDonutColor">
            DONUT CON COBERTURA DE FRUTILLA.
          </div>
        </div>
      </div>
      <div className="titleLineas cakeAndPocketTitle">
        <div>Pocket</div>
        {""} <div className="andTitle">&</div>
        {""} <div>Cake</div>
      </div>

      <div className="cakeYPocket">
        <img className="imageCatalogue2 donut15" src={donut} />
        <div className="imageCatalogue2 donut16">
          <div className="textDescriptionDonut">
            DONUT XL DE 27cm. <br />
            CON TRES TOPPINGS Y UNA SALSA A ELECCIÓN.
          </div>
        </div>
        <img className="imageCatalogue2 donut17" src={donut} />
        <div className="imageCatalogue2 donut18">
          <div className="textDescriptionDonut">
            MINI DONUTS CON COBERTURA DE CHOCOLATE Y SURTIDO DE TOPPINGS.
          </div>
        </div>
      </div>
    </div>
  );
}
