"use client";
import React from "react";
import "./topbar.scss";
import Image from "next/image";
import LogoColor from "../../../public/assets/images/website/treblig-logo-brown.png";
import { BiMailSend } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

export default function Topbar({ open, setOpen }) {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <Image
              src={LogoColor}
              width={35}
              height={50}
              alt="Logo-treblig"
            />
            Treblig.fr
          </a>
          <div className="itemContainer">
            <BsTelephone className="icon" />
            <a href="tel:+33756827809">+33 7 56 82 78 09</a>
          </div>
          <div className="itemContainer">
            <BiMailSend className="icon" />{" "}
            <a href="mailto:michel@treblig.fr">michel@treblig.fr</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
