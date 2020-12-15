import React from "react";
import { FaCat } from "react-icons/fa";
import "./Foot.css";

const year = new Date().getFullYear();

export function Foot() {
  return (
    <div className="codedBy">
      <a
        target="_blank"
        className="linkMailGabiCortes"
        href="mailto:hello@gabicortes.com"
      >
        {year} Coded by Kittyscripts <FaCat />
      </a>
    </div>
  );
}
