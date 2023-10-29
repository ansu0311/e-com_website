import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          We are thrilled to welcome you to our e-commerce platform, where we
          strive to provide the best shopping and selling experience for modern
          individuals. Our platform boasts an incredible array of products, all
          presented in an intuitive and user-friendly design that makes finding
          what you need a breeze. With secure transactions and personalized
          recommendations, you can shop with confidence and ease. Our seller
          support and global marketplace ensure that you can easily sell your
          products to a worldwide audience. And if you ever need assistance, our
          responsive customer support is here to help you every step of the way.
          Join our community today and experience the future of e-commerce!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
