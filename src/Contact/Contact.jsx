import React from "react";
import "./Contact.css";
import logo from "./Logo.png";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export function Contact() {
  return (
    <div className="wrapperContact">
      <img src={logo} className="imageLogoContact" />
      <div className="vectorsToContact">
        <a
          className="linkToGoToContact"
          href="https://api.whatsapp.com/send/?phone=5491123933933&text&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp className="SVGicon" />
        </a>
        <a
          className="linkToGoToContact"
          href="mailto: infohousedonuts@gmail.com"
          target="_blank"
        >
          <FiMail className="SVGicon" />
        </a>
        <a
          className="linkToGoToContact"
          target="_blank"
          href="https://www.instagram.com/houseofdonutsok/"
        >
          <FaInstagram className="SVGicon" />
        </a>
        <a
          className="linkToGoToContact"
          href="https://www.facebook.com/houseofdonutsok"
          target="_blank"
        >
          <FaFacebook className="SVGicon" />
        </a>
      </div>
    </div>
  );
}
