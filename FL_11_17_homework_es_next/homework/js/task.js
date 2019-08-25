//task1
const maxElement = (arr) => Math.max(...arr);

console.log(maxElement([1,2,46,7,6,9,896,697,87,86,8,7,567,86768,869]));

//task2
const copiedArray = (arr) => [...arr];

const array = [1,2,3];
const newArr = copiedArray(array);
console.log(array, newArr);
console.log(array === newArr);

//task3
const addUniqueId = (obj) => {
	const newObj = Object.assign({}, obj);
	const uniqueId = Symbol('someUniqueId');
	newObj.id = uniqueId;
	return newObj
};
console.log(addUniqueId({name: 'Tolik'}));


//task4
const regroupObject = (obj) => {
	const {name: name, details: details} = obj;
	const newObj = {
		univercity: details.univercity,
		user: {id: details.id,
			firstName: name, age: details.age
		}
	};
	console.log(details);
	return newObj
};

console.log(regroupObject({name: 'Someone', details: {id: 1, age: 11, univercity: 'UNI'}}))


//task5
const findUniqueElements = (array) => [... new Set(array)];
console.log(findUniqueElements([1,4,32,5,7,6,6,6,6,3,2,3,7,8,9,8,9]));

// task6
const hideNumber = (phoneNumber) => phoneNumber.slice(-4).padStart(phoneNumber.length, '*');
console.log(hideNumber('123456789'));

//task7
const isRequired = () => {
	throw new Error('Missing property');
};
const add = (a = isRequired(), b = isRequired()) => a + b;

//task8
function fetchUserNames(url) {
	return fetch(url)
		.then(request => request.text())
		.then(data => JSON.parse(data))
		.then(users => console.log(users.map(user => user.name).sort()))
		.catch(err => console.log(`ERROR: ${err.stack}`))
}
fetchUserNames('https://jsonplaceholder.typicode.com/users');

//task9
async function fetchUsersNames(url) {
	try {
		const request = await fetch(url);
		const data = request.data();
		const users = JSON.parse(data);
		const usersSortArray = users.map(user => user.name).sort();
		console.log(usersSortArray);
		return usersSortArray
	}catch(err) {
		console.log(`ERROR: ${err.stack}`);
	}
}
fetchUsersNames('https://jsonplaceholder.typicode.com/users');

