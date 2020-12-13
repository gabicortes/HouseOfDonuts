import React, { useRef } from "react";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { BrandPresentation } from "./BrandPresentation/BrandPresentation";
import { ShopDescription } from "./ShopDescription/ShopDescription";
import { Services } from "./Services/Services";
import { FiInstagram } from "react-icons/fi";
import { Instagram } from "./Instagram/Instagram";
import { Map } from "./Map/Map";
import { Video } from "./Video/Video";
import { Catalogue2 } from "./Catalogue2/Catalogue2";
import { FloatingButton } from "./FloatingButton/FloatingButton";

function App() {
  const nuestroLocalRef = useRef(null);
  const catalogoMiRef = useRef(null);
  const ubicacionRef = useRef(null);
  const deliveryRef = useRef(null);
  const InstagramRef = useRef(null);
  const floatingButtonRef = useRef(null)

  return (
    <div className="App">
      <FloatingButton />
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
      <div>
        <Video />
      </div>
      <div ref={catalogoMiRef}>
        <Catalogue2 />
      </div>
      <Map />
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
