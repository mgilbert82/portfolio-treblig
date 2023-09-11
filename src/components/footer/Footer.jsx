import React from "react";
import "./footer.scss";
import Image from "next/image";
import Link from "next/link";
import LinkDin from "../../../public/images/socialMedia/linkedinLogo.svg";
import Github from "../../../public/images/socialMedia/githubLogo.svg";
import Insta from "../../../public/images/socialMedia/instagramLogo.svg";

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
        <span>Powered by Michel Gilbert</span>
        <hr />
        <span>All right reserved 2023</span>
      </div>
    </div>
  );
}
