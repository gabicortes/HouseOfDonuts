import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./NavBar.css";
import logo from "./Logo.png";
import donuts from "./donuts.png";

const scrollToRef = (ref) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 100,
    behavior: "smooth",
  });

function NavBar(props) {
  const [imageToShow, setImageToShow] = useState("donuts");

  function handleFirstButtonClick() {
    scrollToRef(props.firstButtonSectionRef);
  }
  function handleSecondButtonClick() {
    scrollToRef(props.secondButtonSectionRef);
  }

  function handleThirdButtonClick() {
    scrollToRef(props.thirdButtonSectionRef);
  }

  function handleFourthButtonClick() {
    scrollToRef(props.fourthButtonSectionRef);
  }

  function handleFifthButtonClick() {
    scrollToRef(props.fifthButtonSectionRef);
  }

  useScrollPosition((position) => {
    if (position.currPos.y < -380) {
      setImageToShow("logo");
    } else {
      setImageToShow("donuts");
    }
  });

  const imageNavBar = imageToShow === "donuts" ? donuts : logo;

  return (
    <div id="navbar" className="navBarDiv">
      <div className="buttonsNavBar">
        <span className="buttonNavBar" onClick={handleFirstButtonClick}>
          {props.firstButton}
        </span>
        <span className="buttonNavBar" onClick={handleSecondButtonClick}>
          {props.secondButton}
        </span>
      </div>
      <img
        className={`imageNavBar ${imageToShow}`}
        src={imageNavBar}
        alt="logo"
      />
      <div className="buttonsNavBar">
        <span className="buttonNavBar" onClick={handleThirdButtonClick}>
          {props.thirdButton}
        </span>
        <span className="buttonNavBar" onClick={handleFourthButtonClick}>
          {props.fourthButton}
        </span>
        <span className="buttonNavBar" onClick={handleFifthButtonClick}>
          {props.fifthButton}
        </span>
      </div>
    </div>
  );
}

export { NavBar };
