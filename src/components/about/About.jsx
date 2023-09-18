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
      <h1>A propos</h1>
      <div className="aboutContainer">
        <div className="left">
          <div className="iconContainer">
            <FaFeatherAlt className="icon" />
          </div>
          <h2>Il était une fois...</h2>

          <div className="text">
            <span>
              Un jeune homme motivé, passioné et plein d'énergie qui a
              expérimenté tous les métiers d'un grand magasin. A
              travers mes différents postes, j'ai créer des tableaux
              de bords, des applications de suivis de performances,
              d'activités... Puis des outils d'analyses et de
              synthétisation de données.
              <br />
              <br />
              J'ai participé à plusieurs grands projets informatiques
              avec des interlocuteurs variés (DSI, projets métiers,
              logistiques, comptabilités). Ce qui m'a permis
              d'appréhender le suivi d'un projet et de ces différentes
              phases (analyse du besoin, rédaction du cahier des
              charges, évaluation du coût...) <br />
              <br />
              En 2021, je décide de quitter mon emploi de cadre
              administratif et financier pour me reconvertir. Je me
              remets sur les bancs de l'école et je deviens
              Developpeur web afin de vivre de ma passion.
            </span>
          </div>
        </div>
        <div className="right">
          <div className="rightTop">
            <div className="iconContainer">
              <AiOutlineFieldTime className="icon" />
            </div>
            <h2>Et aujourd'hui..</h2>

            <div className="text">
              <span>
                J'aide au développement des PME, particuliers et
                associations à travailler sur leur communication et
                leur donner de la visibilité sur internet.
              </span>
            </div>
          </div>
          <div className="rightBottom">
            <div className="iconContainer">
              <IoHelpBuoySharp className="icon" />
            </div>
            <h2>Comment puis-je vous aider ?</h2>
            <div className="list">
              <span>
                <LiaRocketSolid className="icon" />
                Développement d'un site vitrine, site marchands, d'un
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
          Demander un devis
        </a>
      </div>
    </div>
  );
}
