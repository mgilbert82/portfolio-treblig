import React from "react";
import "./menu.scss";
import { PiHouseFill } from "react-icons/pi";
import { TbUserQuestion } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiMailSend, BiMessageAltCheck } from "react-icons/bi";
import Footer from "../footer/Footer";

export default function Menu({ open, setOpen }) {
  return (
    <div className={"menu " + (open && "active")}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#intro">
            <PiHouseFill size="30" color="#fef7ec" />
            Home
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#about">
            <TbUserQuestion size="30" color="#fef7ec" />
            About
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#works">
            <BsFillRocketTakeoffFill size="30" color="#fef7ec" />
            Works
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#testimonials">
            <BiMessageAltCheck size="30" color="#fef7ec" />
            Testimonials
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">
            <BiMailSend size="30" color="#fef7ec" />
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
