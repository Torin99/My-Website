import "./Contact.css";

import { useState } from "react";

import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o5tk90d",
        "template_5nhnjd9",
        e.target,
        "9K9NX5XQrF8zXfdFE"
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.log(error));
    // e.reset();

    console.log(name, email, message);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            // value={email}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            // value={password}
          />
        </label>
        <label>
          <span>Message:</span>
          <textarea
            style={{ resize: "none" }}
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Hello..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button className="btn">Send</button>
      </form>
    </section>
  );
}
export default Contact;
