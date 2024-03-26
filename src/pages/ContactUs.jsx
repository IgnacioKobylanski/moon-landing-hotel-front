import React, { useState } from "react";
import '../styles/ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    // a donde mando el msn.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-main">
      <div className="message">
        <h2>Contact Us</h2>
        <form className="form-contact" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </label>
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>
          <label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            />
          </label>
          <button type="submit">Send Message.</button>
        </form>
      </div>
      <div className="img">
        <img src="moonlanding-hotel-logo.png" alt="" />
      </div>
    </div>
  );
}

export default ContactUs;
