import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="about">
          <h3>About Us</h3>
          <p>
            We are an online marketplace offering the best deals on top products. 
            Shop with confidence and enjoy great savings.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        {/* Social Media & Payment */}
        <div>
          <h3>Follow Us</h3>
          <div className="icon">
            <a href="#"><FaFacebook/></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><FaTwitter/></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><FaInstagram/></a>
          </div><br />
          <h3>We Accept</h3>
          <div>
            <span>Visa</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>MasterCard</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>UPI</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        &copy; 2025 East&Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
