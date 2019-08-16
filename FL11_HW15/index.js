class Hamburger{
	constructor(type,calories,secretIngridient) {
		this.type = type;

		let _calories = calories,
				_cheese = 0,
				_tomato = 0,
				_secretIngridient = secretIngridient,
				_timesBite = 0;

		this.getCalories = () => _calories;
		this.setCalories = (newCaloriesValue) =>{
				_calories = newCaloriesValue;
		};
		this.addCheese = () => {
			if(_cheese < 1 && !_timesBite){
				_cheese++;
				_calories += 120
			}else if(_timesBite){
				console.log('Sorry, you cannot add cheese')
			}else{
				console.log('Sorry, you can add cheese only once')
			}
		};
		this.addTomato = () => {
			if(_tomato < 2 && !_timesBite){
				_tomato++;
				_calories += 20
			}else if(_timesBite){
				console.log('Sorry, you cannot add tomato')
			}else{
				console.log('Sorry, you can add tomato only twice')
			}
		};
		this.addSecretIngredient = () => {
			if(!_tomato && !_cheese && _secretIngridient < 1 && !_timesBite){
				_secretIngridient++;
				_calories += 100
			}else if(_timesBite){
				console.log('Sorry, you cannot add tomato');
			}else if(!_tomato && !_cheese && !!_secretIngridient){
				console.log('Sorry, you can add secret ingridient only before another ingridient')
			}else{
				console.log('Sorry, you can add secret ingridient only once')
			}
		};
		this.bite = () => {
			_timesBite++;
		};
		this.info = () => {
			console.log(`${this.type} hamburger: ${!!_secretIngridient ? 'with secret ingridient,': ''}${!!_cheese ?' with cheese,': ''}${!!_tomato ? ' with ' + _tomato + ' tomato,': ''}${!! _timesBite ? ' is bit ' + _timesBite + ' times. ' : "didn't bit yet. "}Total calories: ${_calories}`)
		}
	}
}