import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { BrandPresentation } from "./BrandPresentation/BrandPresentation";
import { ShopDescription } from "./ShopDescription/ShopDescription";
import { Catalogue } from "./Catalogue/Catalogue";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrandPresentation />
      <ShopDescription />
      <Catalogue />
    </div>
  );
}

export default App;






