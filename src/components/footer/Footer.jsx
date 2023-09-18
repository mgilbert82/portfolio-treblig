import React from "react";
import "./footer.scss";
import Image from "next/image";
import Link from "next/link";
import LinkDin from "../../../public/assets/logo/socialMedia/linkedinLogo.svg";
import Github from "../../../public/assets/logo/socialMedia/githubLogo.svg";
import Insta from "../../../public/assets/logo/socialMedia/instagramLogo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialmedia">
        <Link
          href="https://www.linkedin.com/in/michelgilbertlkdin/"
          target="_blank"
          className="link"
        >
          <Image
            src={LinkDin}
            alt="linkedin-logo"
            className="icone"
          />
        </Link>

        <Link
          href="https://www.instagram.com/chelmitreblig/"
          target="_blank"
          className="link"
        >
          <Image src={Insta} alt="instagram-logo" className="icone" />
        </Link>

        <Link
          href="https://github.com/mgilbert82"
          target="_blank"
          className="link"
        >
          <Image src={Github} alt="github-logo" className="icone" />
        </Link>
      </div>
      <div className="credits">
        <span>Créé avec ❤️ par Michel Gilbert</span>
        <hr />
        <span>Tous droits réservés 2023</span>
      </div>
    </div>
  );
}
