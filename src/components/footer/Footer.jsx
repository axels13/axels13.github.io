import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-icons">
          <BsInstagram className="i-icon" />
          <BsFacebook className="f-icon" />
          <BsTwitter className="t-icon" />
        </div>
        <div className="footer-text">
          <code>Sneakers® All Rights Reserved.</code>
          <p>La madrid 123 45</p>
          <span>Madrid</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
