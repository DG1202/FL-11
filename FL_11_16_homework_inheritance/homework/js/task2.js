function create(proto){
	const newObj = {};
	newObj.__proto__ = proto;
	return newObj;
}

const obj1 = { prop: 5 };
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);