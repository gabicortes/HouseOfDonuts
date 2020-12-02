import React, { useRef } from "react";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { BrandPresentation } from "./BrandPresentation/BrandPresentation";
import { ShopDescription } from "./ShopDescription/ShopDescription";
import { Map } from "./Map/Map";
import { Services } from "./Services/Services";
import { Catalogue } from "./Catalogue/Catalogue";
import { FiInstagram } from "react-icons/fi";
import { Instagram } from "./Instagram/Instagram";

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
        <Map
          location={{
            address: "Conesa 102,Quilmes,Provincia de Buenos Aires, Argentina",
            lat: -34.7190178,
            lng: -58.2627505,
          }}
          zoomLevel={18}
        />
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
