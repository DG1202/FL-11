class Hamburger{
	constructor(type,calories,secretIngridient = false) {
		this.type = type;
		this.cheese = 0;
		this.tomato = 0;
		this.secretIngridient = secretIngridient;
		this.timesBite = 0;

		let _calories = calories;

		this.getCalories = () => _calories;
		this.setCalories = (newCaloriesValue) =>{
			_calories = newCaloriesValue;
		};
	}
	addCheese = () => {
		if(!this.cheese && !this.timesBite){
			this.cheese++;
			this.setCalories(this.getCalories() + 120);
		}else if(this.timesBite){
			console.log('Sorry, you cannot add cheese')
		}else{
			console.log('Sorry, you can add cheese only once')
		}
	};
	addTomato = () => {
		if(this.tomato < 2 && !this.timesBite){
			this.tomato++;
			this.setCalories(this.getCalories() + 20);
		}else if(this.timesBite){
			console.log('Sorry, you cannot add tomato')
		}else{
			console.log('Sorry, you can add tomato only twice')
		}
	};
	addSecretIngredient = () => {
		if (!this.tomato && !this.cheese && !this.secretIngridient && !this.timesBite) {
			this.secretIngridient++;
			this.setCalories(this.getCalories() + 100);
		} else if (this.timesBite) {
			console.log('Sorry, you cannot add secret ingridient');
		} else if (!!this.secretIngridient) {
			console.log('Sorry, you can add secret ingridient only once');
		} else {
			console.log('Sorry, you can add secret ingridient only before another ingridient');
		}
	};
	bite = () => {
		this.timesBite++;
	};
	info = () => {
		const secretIngridient = !!this.secretIngridient ? `with secret ingridient,`: '';
		const cheese = !!this.cheese ? `with cheese,`: '';
		const tomato = !!this.tomato ? `with ${this.tomato} tomato,` : '';
		const timesBite = !!this.timesBite ? `is bit ${this.timesBite} times.` : `didn't bit yet.`;
		console.log(`${this.type} hamburger: ${secretIngridient}${ cheese}${ tomato}${ timesBite} Total calories: ${this.getCalories()}`)
	}
}

const myHumburger = new Hamburger('Classic',100);
console.log(myHumburger.getCalories());
myHumburger.info();
myHumburger.addSecretIngredient();
myHumburger.addSecretIngredient();
myHumburger.info();
myHumburger.addCheese();
myHumburger.addCheese();
myHumburger.info();
myHumburger.addTomato();
myHumburger.addTomato();
myHumburger.addTomato();
myHumburger.info();
myHumburger.addSecretIngredient();
myHumburger.bite();
myHumburger.addSecretIngredient();
myHumburger.info();
myHumburger.addCheese();
myHumburger.addTomato();
myHumburger.bite();
myHumburger.bite();
myHumburger.bite();
myHumburger.info();
