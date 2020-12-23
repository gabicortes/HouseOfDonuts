import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./NavBar.css";
import logo from "./Logo.png";
import donuts from "./Dona-09.png";
import { TiThMenu } from "react-icons/ti";

const scrollToRef = (ref) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 100,
    behavior: "smooth",
  });

function NavBar(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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

  function handleSixthButtonClick() {
    scrollToRef(props.sixthButtonSectionRef);
  }

  useScrollPosition((position) => {
    if (position.currPos.y < -380) {
      setImageToShow("logo");
    } else {
      setImageToShow("donuts");
    }
  });

  const imageNavBar = imageToShow === "donuts" ? donuts : logo;

  function triggerHamburgerMenu() {
    setMenuIsOpen((prevValue) => !prevValue);
  }

  let menu = (
    <div className="burgerMenu">
      <a className="linkComprar" href="https://pency.app/houseofdonuts">
        <div className="buttonBuyDonutsonBurgerMenu">COMPRAR </div>
      </a>
      <div className="buttonBurgerNavBar" onClick={handleFirstButtonClick}>
        {props.firstButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleSecondButtonClick}>
        {props.secondButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleThirdButtonClick}>
        {props.thirdButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleFourthButtonClick}>
        {props.fourthButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleFifthButtonClick}>
        {props.fifthButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleSixthButtonClick}>
        {props.sixthButton}
      </div>
    </div>
  );

  const menuWrapperClassname = menuIsOpen
    ? "openMenuWrapper"
    : "closedMenuWrapper";

  return (
    <div>
      <div id="navbar" className="navBarDiv">
        <div className="buttonsNavBar">
          <span className="buttonNavBar" onClick={handleFirstButtonClick}>
            {props.firstButton}
          </span>
          <span className="buttonNavBar" onClick={handleSecondButtonClick}>
            {props.secondButton}
          </span>
          <span className="buttonNavBar" onClick={handleThirdButtonClick}>
            {props.thirdButton}
          </span>
        </div>
        <img
          className={`imageNavBar ${imageToShow}`}
          src={imageNavBar}
          alt="logo"
        />
        <div className="buttonsNavBar">
          <span className="buttonNavBar" onClick={handleFourthButtonClick}>
            {props.fourthButton}
          </span>
          <span className="buttonNavBar" onClick={handleFifthButtonClick}>
            {props.fifthButton}
          </span>
          <span className="buttonNavBar" onClick={handleSixthButtonClick}>
            {props.sixthButton}
          </span>
        </div>
        <TiThMenu className="burgerMenuButton" onClick={triggerHamburgerMenu} />
      </div>
      <div className={menuWrapperClassname}>{menu}</div>

      <a className="linkComprar" href="https://pency.app/houseofdonuts">
        <div className="buttonBuyDonuts">COMPRAR </div>
      </a>
    </div>
  );
}

export { NavBar };
