function assign(object){
	for(let i = 1; i < arguments.length;i++){
		for(let key in arguments[i]){
			if(Object.hasOwnProperty.call(arguments[i], key)) {
				object[key] = arguments[i][key];
			}
		}
	}
	return object
}

const defaults = { a: 123, b: 777 };
const options = { a: 456 };
const configs = assign({}, defaults, options);
console.log(configs);
