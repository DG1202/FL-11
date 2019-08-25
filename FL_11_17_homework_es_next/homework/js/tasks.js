//task1
const maxElement = (arr) => Math.max(...arr);

//task2
const copiedArray = (arr) => [...arr];

//task3
const addUniqueId = (obj) => {
  const newObj = Object.assign({}, obj);
  const uniqueId = Symbol('someUniqueId');
  newObj.id = uniqueId;
  return newObj
};

//task4
const regroupObject = (obj) => {
  if(obj.name && obj.details.id && obj.details.age && obj.details.univercity) {
    const {name: firstName, details: {id, age, univercity}} = obj;
      return {
	univercity,
	user: {
	  id,
	  firstName,
	  age
	}
      }
  }
  throw Error('Wrong object')
};

//task5
const findUniqueElements = (array) => [... new Set(array)];

// task6
const hideNumber = (phoneNumber) => phoneNumber.slice(-4).padStart(phoneNumber.length, '*');

//task7
const isRequired = () => {
  throw new Error('Missing property');
};
const add = (a = isRequired(), b = isRequired()) => a + b;

//task8
function fetchUsersNames(url) {
  return fetch(url)
    .then(response => response.json())
    .then(users => console.log(users.map(user => user.name).sort()))
    .catch(err => console.log(`ERROR: ${err.stack}`))
}

//task9
async function fetchUsersNamesAsync(url) {
  try {
    const response = await fetch(url);
    const users = await response.json();
    let usersNames = users.map(user => user.name).sort();
    console.log(usersNames);
  } catch(err) {
    console.log(err);
  }
}



