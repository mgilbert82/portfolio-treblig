import React from "react";
import "./menu.scss";
import { PiHouseFill } from "react-icons/pi";
import { FaSuitcase } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiMailSend, BiMessageAltCheck } from "react-icons/bi";
import Footer from "../footer/Footer";

export default function Menu({ open, setOpen }) {
  return (
    <div className={"menu " + (open && "active")}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#intro">
            <PiHouseFill color="#b9ecfe" />
            Accueil
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#portfolio">
            <FaSuitcase color="#fce98b" />
            Portfolio
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#works">
            <BsFillRocketTakeoffFill color="#ffc8f0" />
            Travaux
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#testimonials">
            <BiMessageAltCheck color="#b0ffd1" />
            Témoignages
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">
            <BiMailSend color="#d8d8d8" />
            Contact
          </a>
        </li>
      </ul>
      <span>
        {" "}
        <Footer />
      </span>
    </div>
  );
}
