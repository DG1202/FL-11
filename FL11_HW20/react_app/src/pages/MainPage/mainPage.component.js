import React from 'react';
import { Goods } from '../../shared/components/goods';
import { Header } from '../../shared/components/header';
import { Basket } from '../../shared/components/basket';
import {API} from '../../constants/api.constants.js';

import classes from './MainPage.module.scss';

export class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emoji: [],
      basket: [],
    }
  }

  purchase = () =>{
    alert('Purchase has been completed!');
    this.setState({basket:[]});

  };

  deleteItem = (index) => {
    this.setState({
      basket: this.state.basket.filter((v, i) => i !== index)
    });
  };

  renderEmoji = () => {
    return (
      this.state.emoji.map((myEmoji, index) =>
        <Goods
          key = {myEmoji.id}
          emoji = {myEmoji.emoji}
          title = {myEmoji.title}
          rate = {myEmoji.stars}
          price = {myEmoji.price}
          disabled={this.state.basket.some(basketItem => basketItem.id === myEmoji.id)}
          addToBasket={this.addToBasket.bind(null,index)}
        />
      )
    )
  };

  addToBasket = (index) => {
    this.setState((prevState) => ({
      basket: [...this.state.basket, this.state.emoji[index]]
    }))
  };
  componentDidMount() {
    fetch(`${API}/emoji-shop`)
    .then(res => res.json())
    .then(responseEmoji => this.setState({emoji: responseEmoji.emoji}));
  }

  render() {
    if(this.state.emoji.length === 0 ){
      return <p>loading</p>
    }

    return (
      <div className={classes.page}>
        <div className={classes.pageContent}>
          <Header
            emoji = {this.state.emoji[5].emoji}
            title = {this.state.emoji[5].title}
            rate = {this.state.emoji[5].stars}
            price = {this.state.emoji[5].price}
            disabled={this.state.basket.some(basketItem => basketItem.id ===this.state.emoji[5].id)}
            addToBasket={() => {
              this.setState({
                basket: [...this.state.basket, this.state.emoji[5]]
              })
            }}
          />
          <div className={classes.goodsList}>
            {this.renderEmoji()}
          </div>
        </div>
          <Basket
            basketItems={this.state.basket}
            purchase = {this.purchase}
            deleteItem = {this.deleteItem}
            noItem = {this.state.basket.length}
          />
      </div>
    )
  }
}