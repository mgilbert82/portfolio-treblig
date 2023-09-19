"use client";
import React, { useState } from "react";
import "./contact.scss";
import MailSent from "../../../public/assets/images/website/mail-sent.png";
import Image from "next/image";
import { BsSend, BsArrowUpCircle } from "react-icons/bs";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  //Captcha variable
  const [captcha, setCaptcha] = useState("");
  // Form Variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/send-email`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ username, email, message }),
          }
        );
        if (res.ok) {
          setSuccessMessage("Votre message a bien été expédié 🚀");
        } else {
          setErrorMessage("Un incident est survenu 🤔!");
        }
      } catch (error) {
        setErrorMessage("Un incident est survenu 🤔!");
        console.error("Error sending email:", error);
      }
    } else {
      setErrorMessage(
        "Veuillez cocher la case, je ne suis pas un robot.."
      );
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <Image
          src={MailSent}
          alt="This is an image to describe a sending mail"
          width={1024}
          height={763.1}
        />
      </div>
      <div className="right">
        {!successMessage && (
          <>
            <form onSubmit={handleSubmit}>
              <h2>Contact.</h2>

              <input
                type="text"
                name="username"
                placeholder="Nom et Prénom"
                onChange={(e) => setUsername(e.target.value)}
                required
                value={username}
                autoComplete="true"
                aria-label="Username"
              />
              <input
                type="email"
                name="email"
                placeholder="monemail@boitemail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                autoComplete="true"
                aria-label="Email"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Bonjour Michel..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                aria-label="Message"
              ></textarea>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={setCaptcha}
              />
              <button type="submit">
                Envoyer <BsSend className="icon" />
              </button>
              {errorMessage && <span>{errorMessage}</span>}
            </form>
          </>
        )}
        {successMessage && <span>{successMessage}</span>}
      </div>
      <div className="arrowTop">
        <Link href="#intro">
          {" "}
          <BsArrowUpCircle
            size={30}
            color="#411207"
            className="icon"
          />
        </Link>
      </div>
    </div>
  );
}
