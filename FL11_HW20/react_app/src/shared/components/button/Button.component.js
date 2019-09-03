import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss'

export function Button(props) {
  return (
    <button
      className={classes.btn}
      disabled={props.disabled}
      onClick={props.clickAction}
     >
      {props.title}
    </button>

  )
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  clickAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};