import React from "react";
import "./TopProducts.css"; 
import ButtonAnimation from "../Button/Buttons";

const Candles = () => {
  return (
    <div className="products">
      <h6>SHOP OUR FAVORITES</h6>
      <div className="product-1">
        <video autoPlay loop muted className="video1">
          <source src="candle.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="details">
          <h5>
            <span>NATURE’S ESSENCE SCENTED CANDLES</span>
          </h5>

          <p>
            <span>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </span>
          </p>
          <ButtonAnimation />
        </div>
      </div>
      <div className="product-2">
        <div className="details">
          <h5>
            <span>PROBIOTIC CLEANSING BARS</span>
          </h5>

          <p>
            <span>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </span>
          </p>
          <ButtonAnimation />
        </div>
        <video autoPlay loop muted className="video2">
          <source src="soap2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Candles;
