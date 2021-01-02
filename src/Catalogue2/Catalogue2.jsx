import React from "react";
import "./Catalogue2.css";
import kitKat from "./kitKat.JPG";
import oreoDonut from "./oreo.jpg";
import chocolina from "./chocolina.JPG";
import cabsha from "./cabsha.JPG";
import colorfulDonut from "./colorful.JPG";
import pocketDonut from "./pocket.JPG";
import cakeDonut from "./cakeDonut.JPG";

export function Catalogue2() {
  return (
    <div className="wrapperCatalogue">
      <div className="writtenSectionCatalogue">
        <div className="titleCatalogue">Nuestras donuts</div>
        <div className="textCatalogue">
          En House of Donuts, nunca hacemos las cosas de manera aburrida ni lo
          haremos. Nuestras donas son "estilo pastel": ligeras, húmedas y
          sumamente esponjosas. Están diseñadas a medida y decoradas con los
          ingredientes y salsas más frescos. <br />
          <br />
          ¡Nuestras donuts son amor a primer bocado!
        </div>
      </div>
      <div className="donutsDifferentCategoriesWrapper">
        <div className="titleEachLineDonut">Luxury</div>
        <div className="LuxuryDonutsAllImages">
          <div className="firstRowDonutLuxury">
            <img
              className="donutImageCatalogue donutLuxury luxury1"
              src={kitKat}
            />

            <img
              className="donutImageCatalogue donutLuxury luxury2"
              src={oreoDonut}
            />
            <img
              className="donutImageCatalogue donutLuxury luxury3"
              src={chocolina}
            />
            <img
              className="donutImageCatalogue donutLuxury luxury4"
              src={cabsha}
            />
          </div>
          {/* <div className="firstRowDonutLuxury">
            <img
              className="donutImageCatalogue donutLuxury luxury5"
              src={donut}
            />
            <img
              className="donutImageCatalogue donutLuxury luxury6"
              src={donut}
            />
            <img
              className="donutImageCatalogue donutLuxury luxury7"
              src={donut}
            />
            <img
              className="donutImageCatalogue donutLuxury luxury8"
              src={donut}
            />
          </div>*/}
        </div>
        <div className="titleEachLineDonut">Colorful</div>
        <div className="colorfulDonutsAllImages">
          {/*  <img
            className="donutImageCatalogue donutColorful colorful1"
            src={donut}
          />
          <img
            className="donutImageCatalogue donutColorful colorful2"
            src={donut}
      />*/}
          <img
            className="donutImageCatalogue donutColorful colorful3"
            src={colorfulDonut}
          />
        </div>
        <div className="titleEachLineDonut">Cake & Pocket</div>
        <div className="cakeAndPocketAllImages">
          <img className="donutImageCatalogue cake" src={cakeDonut} />
          <img className="donutImageCatalogue pocket" src={pocketDonut} />
        </div>
      </div>
    </div>
  );
}
