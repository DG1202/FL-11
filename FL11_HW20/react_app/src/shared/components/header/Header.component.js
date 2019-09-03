import React from "react";
import PropTypes from "prop-types";

import { Button } from "../button";
import classes from "./Header.module.scss";

export function Header(props) {
  return (
    <div className={classes.goods}>
      <h2>New! {props.title}</h2>
      <p className={classes.subTitle}>Includes</p>
      <div className={classes.emoji}>
        <span className={classes.bigEmoji}>{props.emoji[0].char}</span>
        <span className={classes.middleEmoji}>{props.emoji[1].char}</span>
        <span className={classes.smallEmoji}>{props.emoji[2].char}</span>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          disabled={props.disabled}
          clickAction={props.addToBasket}
          title={`Get(${props.price}$)`}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  emoji: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  addToBasket: PropTypes.func.isRequired
};
