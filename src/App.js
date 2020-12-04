import React, { useRef } from "react";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { BrandPresentation } from "./BrandPresentation/BrandPresentation";
import { ShopDescription } from "./ShopDescription/ShopDescription";
import { Services } from "./Services/Services";
import { Catalogue } from "./Catalogue/Catalogue";
import { FiInstagram } from "react-icons/fi";
import { Instagram } from "./Instagram/Instagram";
import SimpleMap from "./Map2/Map2";

function App() {
  const nuestroLocalRef = useRef(null);
  const catalogoMiRef = useRef(null);
  const ubicacionRef = useRef(null);
  const deliveryRef = useRef(null);
  const InstagramRef = useRef(null);

  return (
    <div className="App">
      <NavBar
        firstButton="Nuestro Local"
        firstButtonSectionRef={nuestroLocalRef}
        secondButton="Catálogo"
        secondButtonSectionRef={catalogoMiRef}
        thirdButton="Ubicación"
        thirdButtonSectionRef={ubicacionRef}
        fourthButton="Delivery"
        fourthButtonSectionRef={deliveryRef}
        fifthButton={<FiInstagram />}
        fifthButtonSectionRef={InstagramRef}
      />
      <BrandPresentation />
      <div ref={nuestroLocalRef}>
        <ShopDescription />
      </div>
      <div ref={catalogoMiRef}>
        <Catalogue />
      </div>
      <div ref={ubicacionRef}>
        <SimpleMap />
      </div>
      <div ref={deliveryRef}>
        <Services />
      </div>
      <div ref={InstagramRef}>
        <Instagram />
      </div>
    </div>
  );
}

export default App;
