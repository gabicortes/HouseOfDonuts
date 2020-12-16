import React from "react";
import "./Catalogue2.css";
import donut from "./donut.png";
import donutCake from "./cake-with-name.png";
import bonobon from "./bon-o-bon.png";
import ferreroRocher from "./ferrero-rocher.png";
import oreo from "./oreo.png";

export function Catalogue2() {
  return (
    <div className="wrapperCatalogue">
      <div className="writtenSectionCatalogue">
        <div className="titleCatalogue">Nuestras donuts</div>
        <div className="textCatalogue">
          En House of Donuts, nunca hacemos las cosas de manera aburrida ni lo
          haremos. Nuestras donas son "estilo pastel": ligeras, húmedas y
          ligeramente crujientes. Están diseñados a medida y decoradas con los
          ingredientes y salsas más frescos. <br />
          <br />
          ¡Nuestras donuts son amor a primer bocado!
        </div>
      </div>
      <div className="donutsDifferentCategoriesWrapper">
        <div className="titleEachLineDonut">Luxury</div>
        <div className="LuxuryDonutsAllImages">
          <div className="firstRowDonutLuxury">
            <div>
              <div>
                <img
                  className="donutImageCatalogue donutLuxury luxury1"
                  src={bonobon}
                />
              </div>
            </div>
            <img
              className="donutImageCatalogue donutLuxury luxury2"
              src={ferreroRocher}
            />
            <img
              className="donutImageCatalogue donutLuxury luxury3"
              src={oreo}
            />
            <img
              className="donutImageCatalogue donutLuxury luxury4"
              src={donut}
            />
          </div>
          <div className="firstRowDonutLuxury">
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
          </div>
        </div>
        <div className="titleEachLineDonut">Colorful</div>
        <div className="colorfulDonutsAllImages">
          <img
            className="donutImageCatalogue donutColorful colorful1"
            src={donut}
          />
          <img
            className="donutImageCatalogue donutColorful colorful2"
            src={donut}
          />
          <img
            className="donutImageCatalogue donutColorful colorful3"
            src={donut}
          />
        </div>
        <div className="titleEachLineDonut">Cake & Pocket</div>
        <div className="cakeAndPocketAllImages">
          <img className="donutImageCatalogue cake" src={donutCake} />
          <img className="donutImageCatalogue pocket" src={donut} />
        </div>
      </div>
    </div>
  );
}
