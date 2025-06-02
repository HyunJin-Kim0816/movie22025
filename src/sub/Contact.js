import React from 'react';
import '../css/contact.css';

function Contact(props) {
  return (
    <div className='contact-wrapper'>
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="subject">Subject:</label>
          <textarea id="subject" name="subject" cols="60" rows="6"></textarea>
        </p>
        <button type="submit">Send</button>
      </form>
    </section>
    </div>
  );
}

export default Contact;
