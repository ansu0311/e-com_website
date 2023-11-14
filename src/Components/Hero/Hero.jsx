import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import boy_banner from "../Assets2/man_hat_black_color.png";
import girl_banner from "../Assets2/girl_jacket_black_color.png";
import Hm from "../Assets2/logo/hm-logo.png";
import Zara from "../Assets2/logo/zara-logo.png";
import Levis from "../Assets2/logo/levis-logo.png";
import Dior from "../Assets2/logo/dior-logo.png";
import Lacosta from "../Assets2/logo/lacoste-logo.png";
import ck from "../Assets2/logo/calvin_klein-logo.png";
import chanel from "../Assets2/logo/chanel-logo.png";
import lv from "../Assets2/logo/louis_vuitton-logo.png";
import pepe from "../Assets2/logo/pepe_jeans-logo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_container">
        <div className="hero_text">
          <div>
            Where Style Finds Its Perfect{" "}
            <span >Hue</span>
          </div>
          <div>
            Explore{" "}
            <span>Harmony</span> in
            Fashion
          </div>
        </div>
        <div className="banner_container">
          <div className="banner">
            <img src={boy_banner} alt="" />
          </div>
          <div className="banner">
            <img src={girl_banner} alt="" />
          </div>
          <div className="banner_text">
            <div className="banner_discription">
              Join us to transform your style and boost your confidence. At
              HueHarmony, fashion is a lifestyle, an art form, and a statement
              of who you are. Let us empower you to live it to the fullest.
            </div>
            <Link to="/login">
              <button>Create account</button>
            </Link>
          </div>
        </div>
        <div className="logo_holder">
          <img className="logo_size" src={Hm} alt="" />
          <img className="logo_size" src={Zara} alt="" />
          <img className="logo_size" src={Levis} alt="" />
          <img className="logo_size" src={Lacosta} alt="" />
          <img className="logo_size" src={ck} alt="" />
          <img className="logo_size" src={Dior} alt="" />
          <img className="logo_size" src={chanel} alt="" />
          <img className="logo_size" src={lv} alt="" />
          <img className="logo_size" src={pepe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
