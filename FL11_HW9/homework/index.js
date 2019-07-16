const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function getNumbers(string) {
  let numbers = [];
  for(let i = 0; i < string.length;i++) {
    if(!isNaN(parseInt(string[i]))){
      numbers.push(parseInt(string[i]))
    }
  }
  return numbers;
}

function findTypes() {
  let dataTypes = {};
  for(let i = 0; i < arguments.length;i++) {
    if(dataTypes[typeof arguments[i]]){
      dataTypes[typeof arguments[i]] += 1
    } else{ 
    dataTypes[typeof arguments[i]] = 1;
    }
  }
  return dataTypes;
}

function executeforEach(array, fn){
  for(let i = 0; i < array.length;i++) {
    fn(array[i]);
  }   
}

function mapArray(array, fn) {
  let newArr = [];
  executeforEach(array, (el) => newArr.push(fn(el)));
  return newArr;
}

function filterArray(array, fn) {
  let newArr = [];
  executeforEach(array, (el) => {
    if(fn(el)){
       newArr.push(el);
      }
    }
  );
  return newArr;
}

function showFormattedDate(date) {
  return `Date: ${date.toLocaleString('en', { month: 'short' })} ${date.getDate()} ${date.getFullYear()}`;
}

function canConvertToDate(date) {
  return new Date(date).toString() !== 'Invalid Date';
}

function daysBetween(start, end) {
  const sec = 1000;
  const min = 60;
  const hour = 60;
  const day = 24;
  const oneDay = sec * min * hour * day;
  return Math.round((end-start) / oneDay);
}

function getAmountOfAdultPeople(data) {
  const adult = 18;
  const yearDays = 365;
  let adultDays = adult * yearDays;
  return filterArray(data, function(el) {
    let personAge = daysBetween(new Date(el[' birthday ']), new Date());
    return personAge > adultDays;
  }).length;  
}

function keys(obj) {
  let myKeys = [];
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      myKeys.push(key); 
  }
}  
  return myKeys
}

function values(obj) {
  let myValues = [];
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      myValues.push(obj[key]); 
    }
  }  
  return myValues;
}









