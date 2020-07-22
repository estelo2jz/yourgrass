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
            <li href="https://www.facebook.com/"><FaFacebook /></li>
            <li href=""><FaTwitter /></li>
            <li href=""><FaInstagram /></li>
            <li href=""><FaPinterest /></li>
            <li href=""><FaGooglePlusG /></li>
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