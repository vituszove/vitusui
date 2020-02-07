import React, { Component } from "react";
import phone from "../images/icons/phone.png"

class Contact extends Component {
  render() {
    return (
      <div className="contact-inner">
        <div className="contact-details">
          <img src={phone} alt="phone" className="contact-icon"/>
          <h1>Whatsapp</h1>
          <p>+60 123 4567</p>
        </div>
      </div>
    );
  }
}

export default Contact;
