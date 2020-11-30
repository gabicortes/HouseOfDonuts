import React from "react";
import "./Services.css";

export function Services() {
  return (
    <div className="WrapperServices">
      <div className="deliveryWrapper">
        <div className="fullTitle">
          <div className="firstPartTitle">Deli</div>
          <div className="secondPartTitle">very</div>
        </div>
        <div className="contentServiceShipping">
          Los buenos momentos están tocando la puerta de tu casa... y traen
          donuts! <br />
          Elegí tu pedido y coordinamos para que lo tengas rápidamente en la
          comodidad de tu hogar.
        </div>
        <button className="buttonDonut">
          <a
            href="https://pency.app/houseofdonuts"
            className="hyperlinkPedido"
            target="_blank"
          >
            Deli-D🍩nuts
          </a>
        </button>
      </div>
      <div className="takeAwayWrapper">
        <div className="fullTitle">
          <div className="firstPartTitle">Take</div>
          <div className="secondPartTitle">away</div>
        </div>
        <div className="contentServiceShipping">
          Estamos siempre cerca tuyo para brindarte la mejor experiencia para
          vos y tu familia.
          <br />
          Hace tu pedido y retiralo en nuestro local del barrio de Quilmes.
        </div>
        <button className="buttonDonut">
          <a
            href="https://pency.app/houseofdonuts"
            className="hyperlinkPedido"
            target="_blank"
          >
            Lleval🍩
          </a>
        </button>
      </div>
    </div>
  );
}
