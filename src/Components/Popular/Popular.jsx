import React, { useContext } from "react";
import "./Popular.css";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import side_arrow from "../Assets2/arrowdown.png";

const Popular = () => {
  const { listmaking } = useContext(ShopContext);

  const list_autumn = listmaking("Autumn Winter");

  console.log(list_autumn);
  return (
    <div className="containe">
      <div className="Popular">
        <div className="text_cont">
          <div className="text_left">
            <div className="text_left_title">Autumn - Winter</div>
            <div className="text_left_title">Collection 23</div>
            <div className="text_left_bottom">
              <p>view collection</p>
              <img src={side_arrow} alt="" />
            </div>
          </div>
          <div className="text_right">
            Our collection features a mesmerizing array of autumnal colors, from
            deep forest greens to rich earthy tones, warm burgundies, and the
            timeless allure of classic neutrals. Each piece is thoughtfully
            designed to blend seamlessly with the season's natural beauty.
          </div>
        </div>
        <div className="image_cont">
          <div className="Popular_left">
            <Link to={`/product/${list_autumn[0].id}`}>
              <img src={list_autumn[0].image} alt="" />
            </Link>
          </div>
          <div className="Popular_right">
            
              <Link to={`/product/${list_autumn[1].id}`}>
                <img src={list_autumn[1].image} alt="" />
              </Link>
            
            
              <Link to={`/product/${list_autumn[2].id}`}>
                <img src={list_autumn[2].image} alt="" />
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
