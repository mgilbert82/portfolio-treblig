import React, { useState } from "react";
import "./contact.scss";
import MailSent from "../../../public/assets/images/website/mail-sent.png";
import Image from "next/image";
import { BsSend } from "react-icons/bs";

export default function Contact() {
  // Form Variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setSuccessMessage(
          "Votre message a été envoyé avec succès 🚀"
        );
      } else {
        setErrorMessage("Un incident est survenu 🤔!");
      }
    } catch (error) {
      setErrorMessage("Un incident est survenu 🤔!");
      console.error("Error sending email:", error);
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
        {errorMessage && <span>{errorMessage}</span>}
        {!successMessage && (
          <>
            <form onSubmit={handleSubmit}>
              <h2>Contact.</h2>

              <input
                type="text"
                name="username"
                placeholder="John Doe"
                onChange={(e) => setUsername(e.target.value)}
                required
                value={username}
              />
              <input
                type="email"
                name="email"
                placeholder="johndoe@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Hello my friend..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
              <button type="submit">
                Send <BsSend className="icon" />
              </button>
            </form>
          </>
        )}
        {successMessage && <span>{successMessage}</span>}
      </div>
    </div>
  );
}
