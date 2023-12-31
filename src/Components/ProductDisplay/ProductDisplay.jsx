import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import {ShopContext} from '../../Context/ShopContext'

const ProductDisplay = (props) => {

  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  const [size, setSize] =useState('S')

  return (
    <div className="productdisplay">
      <div className="product_cont">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Bold branding, classic cutlines and a modern fit elevate this
          far-from-basic, PUMA Hoodie, from causal to street chic. Also, keep
          your conscious clean because this is made under the Forever Better
          Initiative which promoted sustainable cotton farming globally.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
          <div onClick={() => {setSize("S")}} style={(size === "S")?{color: "var(--darkText)",background: "var(--mainBrandColor)",border:"2px solid var(--mainBrandColor)",transition:"0.5s"}:{color: "var(--mainBrandColor)",background: "transparent", border: '2px solid var(--mainBrandColor)',transition:"0.5s"}}>S</div>
          <div onClick={() => {setSize("M")}} style={(size === "M")?{color: "var(--darkText)",background: "var(--mainBrandColor)",border:"2px solid var(--mainBrandColor)",transition:"0.5s"}:{color: "var(--mainBrandColor)",background: "transparent", border: '2px solid var(--mainBrandColor)',transition:"0.5s"}}>M</div>
          <div onClick={() => {setSize("L")}} style={(size === "L")?{color: "var(--darkText)",background: "var(--mainBrandColor)",border:"2px solid var(--mainBrandColor)",transition:"0.5s"}:{color: "var(--mainBrandColor)",background: "transparent", border: '2px solid var(--mainBrandColor)',transition:"0.5s"}}>L</div>
          <div onClick={() => {setSize("XL")}} style={(size === "XL")?{color: "var(--darkText)",background: "var(--mainBrandColor)",border:"2px solid var(--mainBrandColor)",transition:"0.5s"}:{color: "var(--mainBrandColor)",background: "transparent", border: '2px solid var(--mainBrandColor)',transition:"0.5s"}}>XL</div>
            <div onClick={() => {setSize("XXL")}} style={(size === "XXL")?{color: "var(--darkText)",background: "var(--mainBrandColor)",border:"2px solid var(--mainBrandColor)",transition:"0.5s"}:{color: "var(--mainBrandColor)",background: "transparent", border: '2px solid var(--mainBrandColor)',transition:"0.5s"}}>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id,size)}}>
          ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>Mordern, Latest
        </p>
      </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
