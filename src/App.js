import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { BrandPresentation } from "./BrandPresentation/BrandPresentation";
import { ShopDescription } from "./ShopDescription/ShopDescription";
import { Catalogue } from "./Catalogue/Catalogue";
import { Map } from "./Map/Map";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrandPresentation />
      <ShopDescription />
      <Catalogue />
      <Map
        location={{
          address: "Conesa 102,Quilmes,Provincia de Buenos Aires, Argentina",
          lat: -34.7190178,
          lng: -58.2627505,
        }}
        zoomLevel={18}
      />
    </div>
  );
}

export default App;
