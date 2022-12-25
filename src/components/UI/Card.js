import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <span className={`${classes.card} ${props.className}`}>
      {props.children}
    </span>
  );
};

export default Card;
