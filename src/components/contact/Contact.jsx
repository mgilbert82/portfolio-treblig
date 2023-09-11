import React, { useState } from "react";
import "./contact.scss";
import MailSent from "../../../public/images/mail-sent.png";
import Image from "next/image";
import { BsSend } from "react-icons/bs";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <Image src={MailSent} alt="" width={1024} height={763.1} />
      </div>
      <div className="right">
        {!message ? <h2>Contact.</h2> : <h2>Thank you !</h2>}
        {!message ? (
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="johndoe@mail.com" />
            <textarea
              name="message"
              id="message"
              placeholder="Hello my friend..."
            ></textarea>
            <button type="submit">
              Send <BsSend />
            </button>
          </form>
        ) : (
          <span>You're message has been sended 🚀</span>
        )}
      </div>
    </div>
  );
}
