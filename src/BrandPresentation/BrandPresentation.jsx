import React from "react";
import "./BrandPresentation.css";
import donut from "./donut.jpg";
import logo from "./Logo.png"

function BrandPresentation() {
  return (
    <div>
      <img className="firstPagePhoto" src={donut} />
      <img className="firstPageLogo" src={logo}/>
    </div>
  );
}

export { BrandPresentation };
