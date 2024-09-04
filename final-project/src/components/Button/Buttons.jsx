import React, { useState } from "react";
import "./Buttons.css";

const ButtonAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "relative",
    display: "inline-block",
    color: isHovered ? "#fff" : "#f5ace4",
    padding: "10px 25px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    textDecoration: "none",
    textTransform: "uppercase",
    overflow: "hidden",
    letterSpacing: "2px",
    transition: "0.5s",
    backgroundColor: isHovered ? "#f5ace4" : "transparent",
  };

  const spanStyleBase = {
    position: "absolute",
    display: "block",
  };

  const span1Style = {
    ...spanStyleBase,
    top: 0,
    left: "-100%",
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #f978db)",
    animation: "btnAnim1 1s linear infinite",
  };

  const span2Style = {
    ...spanStyleBase,
    top: "-100%",
    right: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(180deg, transparent, #f978db)",
    animation: "btnAnim2 1s linear infinite",
    animationDelay: "0.25s",
  };

  const span3Style = {
    ...spanStyleBase,
    bottom: 0,
    right: "-100%",
    width: "100%",
    height: "2px",
    background: "linear-gradient(270deg, transparent, #f978db)",
    animation: "btnAnim3 1s linear infinite",
    animationDelay: "0.5s",
  };

  const span4Style = {
    ...spanStyleBase,
    bottom: "-100%",
    left: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(360deg, transparent, #f978db)",
    animation: "btnAnim4 1s linear infinite",
    animationDelay: "0.75s",
  };

  return (
    <a
      href="#"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="button-animation"
    >
      Shop Now
      <span style={span1Style}></span>
      <span style={span2Style}></span>
      <span style={span3Style}></span>
      <span style={span4Style}></span>
    </a>
  );
};

export default ButtonAnimation;
