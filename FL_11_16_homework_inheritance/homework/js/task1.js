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

