import React, { useEffect, useRef } from "react";
import "./intro.scss";
import IconME from "../../../public/images/iconme.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ["Developer", "Designer", "Content creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <Image
            src={IconME}
            width={600}
            height={600}
            className="img"
            alt="img"
            loading="lazy"
          />
        </div>
      </div>
      <div className="right">
        <div className="introWrapper">
          <h2>Hi there, I'am </h2>
          <h1>Michel Gilbert</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href="#about">
            <IoIosArrowDown size="40" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
