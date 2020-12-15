import React, { useRef } from "react";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { BrandPresentation } from "./BrandPresentation/BrandPresentation";
import { ShopDescription } from "./ShopDescription/ShopDescription";
import { Services } from "./Services/Services";
import { Instagram } from "./Instagram/Instagram";
import { Map } from "./Map/Map";
import { Video } from "./Video/Video";
import { Catalogue2 } from "./Catalogue2/Catalogue2";
import { FloatingButton } from "./FloatingButton/FloatingButton";
import { Contact } from "./Contact/Contact";
import { Foot } from "./Foot/Foot";

function App() {
  const nuestroLocalRef = useRef(null);
  const catalogoMiRef = useRef(null);
  const ubicacionRef = useRef(null);
  const deliveryRef = useRef(null);
  const InstagramRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <FloatingButton />
      <NavBar
        firstButton="Nosotros"
        firstButtonSectionRef={nuestroLocalRef}
        secondButton="Catálogo"
        secondButtonSectionRef={catalogoMiRef}
        thirdButton="Ubicación"
        thirdButtonSectionRef={ubicacionRef}
        fourthButton="Delivery"
        fourthButtonSectionRef={deliveryRef}
        fifthButton="Instagram"
        fifthButtonSectionRef={InstagramRef}
        sixthButton="Contacto"
        sixthButtonSectionRef={contactRef}
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
      <div ref={ubicacionRef}>
        <Map />
      </div>
      <div ref={deliveryRef}>
        <Services />
      </div>
      <div ref={InstagramRef}>
        <Instagram />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Foot />
      </div>
    </div>
  );
}

export default App;
