import React from "react";
import {FaInstagram} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; 2023 burger02.com</p>
        <FaInstagram />
        <BsTwitter />
        <BsFacebook />
      </div>
    </div>
  );
}

export default Footer;
