import React from "react";
import "./BrandPresentation.css";
import donut from "./donut4bis.jpg";
import logo from "./Logo.png";

function BrandPresentation() {
  return (
    <div className="brandDescriptionWrapper">
      <img className="firstPagePhoto" src={donut} />
      <img className="firstPageLogo" src={logo} />

    </div>
  );
}

export { BrandPresentation };
