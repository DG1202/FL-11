import React from 'react';
import PropTypes from 'prop-types';

import classes from './Basket.module.scss'
import {Button} from "../button";

export function Basket(props) {
  return <aside className={classes.basket}>
          <h3>Basket</h3>
          {!props.noItem
          && <p>No item to purchase</p>}
          {props.noItem
          && <div>
              <ul className={classes.basketItems}>
                {props.basketItems.map((item, index) =>{
                   return(
                     <li
                       className={classes.item}
                       key = {item.id}

                     >
                       <span className={classes.itemTitle}>
                         {`${item.title} - ${item.price}$`}
                       </span>
                       <img
                         onClick={props.deleteItem.bind(null,index)}
                         src="./close.png"
                         alt="Close"
                       />
                     </li>
                  )}
                )}
              </ul>
              <Button
                clickAction={props.purchase}
                title = {`Purshare (${props.basketItems.reduce((sum,v)=> 
                        sum += v.price,0)}$)`}
              />
             </div>}
          </aside>
}

Basket.propTypes = {
  purchase: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  basketItems: PropTypes.array.isRequired,
  noItem: PropTypes.bool.isRequired
};