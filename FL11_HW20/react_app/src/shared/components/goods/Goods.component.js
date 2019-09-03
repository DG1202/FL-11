import React from "react";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

import classes from "./Goods.module.scss";
import { Button } from "../button";

export function Goods(props) {
  return (
    <div className={classes.goods}>
      <div className={classes.emoji}>
        <span className={classes.bigEmoji}>{props.emoji[0].char}</span>
        <span className={classes.middleEmoji}>{props.emoji[1].char}</span>
        <span className={classes.smallEmoji}>{props.emoji[2].char}</span>
      </div>
      <h4>{props.title}</h4>
      <StarRatings
        rating={props.rate}
        starRatedColor="#f7bc07"
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="1px"
      />

      <Button
        disabled={props.disabled}
        clickAction={props.addToBasket}
        title={`Get(${props.price}$)`}
      />
    </div>
  );
}

Goods.propTypes = {
  emoji: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  addToBasket: PropTypes.func.isRequired
};
