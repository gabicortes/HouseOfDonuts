import React from "react";
import "./Catalogue.css";
import donut from "./donutCatalogue.jpeg";

function Catalogue() {
  return (
    <div>
      <div className="titleNuestrasDonas">Nuestras donas.</div>
      <div className="titleEachLine titleLineaLuxury">
        <div className="firstPartOfTheName">Linea</div>
        <div className="secondPartOfTheName"> Luxury </div>
      </div>
      <div id="catalogueLuxuryWrapper">
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Bonobon</div>
        </div>
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Marroc</div>
        </div>
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Ferrero Rocher</div>
        </div>
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Oreo</div>
        </div>
      </div>
      <div className="titleEachLine titleLineaColorful">
        <div className="firstPartOfTheName">Linea</div>
        <div className="secondPartOfTheName"> Colorful</div>
      </div>
      <div id="catalogueLuxuryWrapper">
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Amarilla</div>
        </div>
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Cian</div>
        </div>
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Magenta</div>
        </div>
      </div>

      <div className="titleEachLine titleEachLinetitleEspeciales">
        <div className="firstPartOfTheName">Cake</div>
        <div className="secondPartOfTheName">& Pocket</div>
      </div>

      <div id="catalogueLuxuryWrapper">
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Donut Cake</div>
        </div>
        <div className="photoCatalogueDonutLuxury">
          <img className="photoCatalogueDonutLuxuryIndividual" src={donut} />
          <div className="nameOfDonut">Pocket</div>
        </div>
      </div>
    </div>
  );
}

export { Catalogue };
