import "./about.scss";
import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoHelpBuoySharp } from "react-icons/io5";
import { IoIosCafe } from "react-icons/io";
import { LiaRocketSolid } from "react-icons/lia";
import { BsBalloonHeart, BsEnvelopePaperHeart } from "react-icons/bs";
import Aboutimg from "../../../public/assets/images/website/about-img.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>A propos</h1>
      <div className="aboutContainer">
        <div className="left">
          <div className="title">
            <div className="iconContainer">
              <FaFeatherAlt className="icon" />
            </div>
            <h2>L'Expérience</h2>
          </div>
          <div className="text">
            <span>
              Après 20 ans à explorer divers métiers dans des domaines
              variés (administration, financière, logistique,...),
              j'ai assimilé des compétences de management, d'analyses,
              d'organisations... <br />
              En parallèle, j'ai toujours développé des tableaux de
              bords, des applications de suivis de performances,
              d'activités... Puis des outils d'analyses et de
              synthétisation de données.
              <br />
              <br />
              J'ai participé à de grands projets informatiques avec
              des interlocuteurs variés (DSI, projets métiers,
              logistiques, comptabilités). Ce qui m'a permis
              d'appréhender le suivi d'un projet et de ces différentes
              phases (analyse du besoin, rédaction du cahier des
              charges, évaluation du coût...) <br />
              <br />
              En 2021, je décide de réaliser une reconversion vers le
              métier de développeur web.
            </span>
          </div>
        </div>
        <div className="center">
          <Image src={Aboutimg} alt="" width={750} height={500} />
        </div>
        <div className="right">
          <div className="now">
            <div className="title">
              <div className="iconContainer">
                <AiOutlineFieldTime className="icon" />
              </div>
              <h2>Actuellement..</h2>
            </div>
            <div className="text">
              <span>
                J'assiste des PME, particuliers et associations au
                développement de leur communication et leur donner de
                la visibilité sur internet.
              </span>
            </div>
          </div>
          <div className="help">
            <div className="title">
              {" "}
              <div className="iconContainer">
                <IoHelpBuoySharp className="icon" />
              </div>
              <h2>Comment puis-je vous aider ?</h2>
            </div>
            <div className="text">
              <span>
                <LiaRocketSolid className="icon" />
                Développement d'un site vitrine, site marchand, d'un
                compte business sur google, ...
              </span>
              <span>
                <BsBalloonHeart className="icon" />
                Conception d'une identité graphique (logo, charte
                graphiques, ...)
              </span>
              <span>
                <BsEnvelopePaperHeart className="icon" />
                Création de supports de communications (flyer,
                affiche, publicitaire,...)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ctaButton">
        <a href="#contact" className="button">
          <IoIosCafe size={20} color="#fbeaca" /> Me contacter
        </a>
      </div>
    </div>
  );
}
