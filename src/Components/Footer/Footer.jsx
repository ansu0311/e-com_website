import React from "react";
import "./Footer.css";
import logo from "../Assets2/cloth_logo.png";
import { Link } from "react-router-dom";
import Dribble_light from "../Assets2/social/Dribble_light.png";
import LinkedIn_light from "../Assets2/social/LinkedIn_light.png";
import Resume_light from "../Assets2/social/Resume_light.png";
import Website_light from "../Assets2/social/Website_light.png";
import gitHub_light from "../Assets2/social/gitHub_light.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="footer-logo">
          <img src={logo} alt="logo big" />
          <p>
            <span>Hue</span>Harmony
          </p>
        </div>
      </Link>
      <ul className="footer-links">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "var(--lightText)" }}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "var(--lightText)" }}
        >
          <li>Account</li>
        </Link>
        <Link
          to="/cart"
          style={{ textDecoration: "none", color: "var(--lightText)" }}
        >
          <li>Cart</li>
        </Link>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <Link
            to="https://dribbble.com/shots/23018997-HueHarmony-Unveiling-Luxury-Clothing?utm_source=Clipboard_Shot&utm_campaign=Ansu0311&utm_content=HueHarmony%3A%20Unveiling%20Luxury%20Clothing&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Ansu0311&utm_content=HueHarmony%3A%20Unveiling%20Luxury%20Clothing&utm_medium=Social_Share"
            style={{ textDecoration: "none", color: "var(--lightText)" }}
          >
            <img src={Dribble_light} alt="Dribble logo" />
          </Link>
        </div>
        <div className="footer-icons-container">
          <Link
            to="https://www.linkedin.com/in/ansumannayak03/"
            style={{ textDecoration: "none", color: "var(--lightText)" }}
          >
            <img src={LinkedIn_light} alt="LinkedIn logo" />
          </Link>
        </div>
        <div className="footer-icons-container">
          <Link
            to="https://github.com/ansu0311/e-com_website"
            style={{ textDecoration: "none", color: "var(--lightText)" }}
          >
            <img src={gitHub_light} alt="GitHub logo" />
          </Link>
        </div>
        <div className="footer-icons-container">
          <Link
            to="https://portfolio-website-fawn-mu.vercel.app/"
            style={{ textDecoration: "none", color: "var(--lightText)" }}
          >
            <img src={Website_light} alt="Website logo" />
          </Link>
        </div>
        <div className="footer-icons-container">
          <Link
            to="https://drive.google.com/file/d/1nAelXE1CLXMYDqlhg2yks1e0hGm_9kOO/view?usp=sharing"
            style={{ textDecoration: "none", color: "var(--lightText)" }}
          >
            <img src={Resume_light} alt="Resume logo" />
          </Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
