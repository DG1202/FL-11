class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscound = nightDiscount;
    this.bonus = bonus;
    this.discount = 0;
    this.finalPrice = 0;
  }

  makeOrder() {
    const fullDiscount = (this.orderTotalPrice / 100) * this.discount;
    this.finalPrice = this.orderTotalPrice - fullDiscount - this.bonus;
    return `Price after discount and including bonuses is ${this.finalPrice.toFixed(2)} UAH.`;
  }
}

function getDiscount(user) {
  user.discount = 0;
  const { nightDiscound, weekendDiscount } = user;
  const curDate = new Date();
  const curHour = curDate.getHours();
  const curDay = curDate.getDay();

  if (curHour >= 23 || curHour <= 6) {
    user.discount += nightDiscound;
  }
  if (curDay === 6 || curDay === 0) {
    user.discount += weekendDiscount;
  }
  return user.discount;
}

function setBonus(user) {
  const noBonus = user.orderTotalPrice % 100;
  const amountForBonus = user.orderTotalPrice - noBonus;
  user.bonus = amountForBonus * 0.05;
  return user.bonus;
}

const igor = new User('Igor', 399, 20, 20, 0);
getDiscount(igor);
setBonus(igor);
igor.makeOrder();
