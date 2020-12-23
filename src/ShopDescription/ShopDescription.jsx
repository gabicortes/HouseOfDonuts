import React from "react";
import "./ShopDescription.css";
import Background from "./donut_gradient.png";
import shopFront from "./shopFront.png";

export function ShopDescription() {
  return (
    <div className="WrapperShopDecription">
      <div className="titleNuestroLocal">Nuestro Local.</div>
      <div className="contentTextAndPhoto">
        <div className="TextNuestroLocal">
          House of Donuts nace en el año 2018 cuando soñábamos con un espacio
          que conecte personas con sabores únicos en el lugar que nos vio
          crecer: el barrio de Quilmes. <br />
          <br />
          Cada una de nuestras donuts está hecha de manera artesanal, con una
          masa completamente suave por dentro y lo suficientemente crocante por
          fuera. Llenas de dulzura y para todos los gustos.
          <br />
          <br /> La selección de sabores está pensada en el paladar argentino
          que se deleita de solo pensar en probar Oreo, Bon o Bon, dulce de
          leche, y más… <br />
          <br />
          Apurate que están recién cocinadas :)
        </div>
        <img className="imageFrontShop wrapperImageShop" src={shopFront} />
      </div>
      <img className="donutGradientImage" src={Background} />
    </div>
  );
}
