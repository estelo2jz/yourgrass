import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer-container">
        <hr/>
      <div className="footer-flex">
        <div>
          <p>
            Copyright © 2020 Grass PRO - All Copyrights Reserved.
          </p>
        </div>

        <div className="footer-socials">
          <ul>
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://twitter.com/home?lang=en"><FaTwitter /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.pinterest.com/"><FaPinterest /></a>
            <a href=""><FaGooglePlusG /></a>
          </ul>
        </div>

        <div>
          <p>Your Neighborhood Lawn Care Provider</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;