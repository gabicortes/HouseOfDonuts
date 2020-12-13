import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import donutsOreo from "./donutsOreo.jpg";
import donutRosa from "./donutRosa.jpg";
import "./Services.css";

export function Services() {
  const [positionY, setPositionY] = useState(0);

  useScrollPosition((position) => {
    setPositionY(position.currPos.y);
  });

  let imageTranslateX = positionY / 5 + 800;
  if (imageTranslateX < -125) {
    imageTranslateX = -125;
  } else if (imageTranslateX > 125) {
    imageTranslateX = 125;
  }

  return (
    <div className="servicesWrapper">
      <div className="serviceLeft">
        <img
          className="serviceImageLeft"
          src={donutRosa}
          style={{
            transform: `translateX(${imageTranslateX}px) scale(1.4)`,
          }}
        />
        <div className="serviceText">
          <div className="fullTitle">
            <div className="firstPartTitle">Delivery</div>
          </div>
          <div className="contentServiceShipping">
            Los buenos momentos están tocando la puerta de tu casa... y traen
            donuts! <br />
            Elegí tu pedido y coordinamos para que lo tengas rápidamente en la
            comodidad de tu hogar.
          </div>
          <div className="buttonDonut">
            <a
              href="https://pency.app/houseofdonuts"
              className="hyperlinkPedido"
              target="_blank"
            >
              PEDIR ONLINE
            </a>
          </div>
        </div>
      </div>
      <div className="serviceRight">
        <img
          className="serviceImageRight"
          src={donutsOreo}
          style={{
            transform: `translateX(${-imageTranslateX}px) scale(1.4)`,
          }}
        />
        <div className="serviceText">
          <div className="fullTitle">
            <div className="firstPartTitle">Takeaway</div>
          </div>
          <div className="contentServiceShipping">
            Estamos siempre cerca tuyo para brindarte la mejor experiencia para
            vos y tu familia.
            <br />
            Hace tu pedido y retiralo <br />
            en nuestro local del barrio de Quilmes.
          </div>
          <div className="buttonDonut">
            <a
              href="https://pency.app/houseofdonuts"
              className="hyperlinkPedido"
              target="_blank"
            >
              ELEGÍ TUS FAVORITAS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
