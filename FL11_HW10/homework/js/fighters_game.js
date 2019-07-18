function Fighter(fighterInfo) {
  let win = 0;
  let lose = 0;
  return {
    getName: () => fighterInfo.name,
    getDamage: () => fighterInfo.damage,
    getAgility: () => fighterInfo.agility,
    getHealth: () => fighterInfo.hp,
    attack: (opponent) => {
      const maxAgility = 100;
      let atackPower = Math.random() * maxAgility;
      if(atackPower > opponent.getAgility()) {
        opponent.dealDamage(fighterInfo.damage);
        console.log(`${fighterInfo.name} make ${fighterInfo.damage} to ${opponent.getName()}`);
      }else {
        console.log(`${fighterInfo.name} attack missed`)
      }
    },
    logCombatHistory: () => {
      console.log(`Name: ${fighterInfo.name}, Wins: ${win}, Losses: ${lose}`)
    },
    heal: (addedHp) => {
      let newFighterHp = fighterInfo.hp + addedHp;
      const maxHelth = 100;
      if(newFighterHp > maxHelth) {
        fighterInfo.hp = maxHelth;
      }else {
        fighterInfo.hp = newFighterHp;
      }
    },
    dealDamage: (reducedHp) => {
      let newFighterHp = fighterInfo.hp - reducedHp;
      if(newFighterHp < 0) {
        fighterInfo.hp = 0
      }else {
        fighterInfo.hp = newFighterHp
      }
    },
    addWin: () => {
      win++
    },
    addLoss: () => {
      lose++
    }
  }
}

function battle(fighterOne, fighterTwo) {
  if(fighterOne.getHealth() === 0) {
    console.log(`${fighterOne.getName()} is dead and can't fight`)
  }else if (fighterTwo.getHealth() === 0) {
    console.log(`${fighterTwo.getName()} is dead and can't fight`)
  }else {
    while (fighterOne.getHealth() > 0 && fighterTwo.getHealth() > 0) {
      fighterOne.attack(fighterTwo);
      if(fighterTwo.getHealth() <= 0) {
        console.log(`${fighterOne.getName()} won`);
        fighterOne.addWin();
        fighterTwo.addLoss();
        break
      }
      fighterTwo.attack(fighterOne);
      if(fighterOne.getHealth() <= 0) {
        console.log(`${fighterTwo.getName()} won`);
        fighterTwo.addWin();
        fighterOne.addLoss();
        break
      }
    }
}
}
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter1 = new Fighter({name: 'Ivan', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Petro', damage: 20, hp: 100, agility: 25});

battle(myFighter, myFighter1);
battle(myFighter, myFighter2);
battle(myFighter2, myFighter1);