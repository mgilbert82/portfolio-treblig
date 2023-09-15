import "./about.scss";
import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoHelpBuoySharp } from "react-icons/io5";
import { LiaRocketSolid } from "react-icons/lia";
import { BsBalloonHeart, BsEnvelopePaperHeart } from "react-icons/bs";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>Who am I ?</h1>
      <div className="aboutContainer">
        <div className="left">
          <div className="iconContainer">
            <FaFeatherAlt className="icon" />
          </div>
          <h2>Story</h2>

          <div className="text">
            <span>
              Adventurers for several years exploring the world of
              department stores, and conquering human management
              through support, communication and knowledge sharing.
              <br />
              <br />
              During this period, I developed several IT solutions to
              optimize and improve the quality of life at work. While
              I participated in the group"s various IS projects, I was
              often a referent, trainer, key-user... <br />
              <br />
              After 15 years in this structure, I decided to make a
              professional retraining in web application development.
            </span>
          </div>
        </div>
        <div className="right">
          <div className="rightTop">
            <div className="iconContainer">
              <AiOutlineFieldTime className="icon" />
            </div>
            <h2>Now</h2>

            <div className="text">
              <span>
                Actually, i work on myself to help handcraft man,
                charitable association to improve her communication on
                the web !
              </span>
            </div>
          </div>
          <div className="rightBottom">
            <div className="iconContainer">
              <IoHelpBuoySharp className="icon" />
            </div>
            <h2>What can i do for you ?</h2>
            <div className="list">
              <span>
                <LiaRocketSolid className="icon" />
                Develop and deploy an e-commerce solution, showcase, a
                mobile application
              </span>
              <span>
                <BsBalloonHeart className="icon" />
                Create your own brand design
              </span>
              <span>
                <BsEnvelopePaperHeart className="icon" />
                Improve your communication with flyers, creative
                content, ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ctaButton">
        <a href="#contact" className="button">
          Contact me
        </a>
      </div>
    </div>
  );
}
