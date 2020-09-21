//# Objects: Part 1

//**1. Object Person.**
let person = { name: "John", surname: "Doe", age: 30, job: "Taxi-Driver" };
for (key in person) {
  console.log(key + ":" + person[key]);
}
//**2. Get Values.**
let drinks = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
function getObjectValues(obj) {
  let newarr = [];
  for (key in obj) {
    newarr.push(obj[key]);
  }
  return newarr;
}
console.log(getObjectValues(drinks));

//**3. Add A Method.**

let person2 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
};
function aSentence(obj) {
  let message = `${obj.firstName} ${obj.lastName} is a ${obj.age} year old ${obj.job} in ${obj.city}. `;
  return message;
}
console.log(aSentence(person2));

//## Bonus Questions

//**1. Convert keys and values into an array.**
function objectToArray(obj) {
  let arrOfArr = [];
  for (key in obj) {
    let anArr = [];
    anArr.push(key, obj[key]);
    arrOfArr.push(anArr);
  }
  return arrOfArr;
}
console.log(
  objectToArray({
    A: 1,
    B: 2,
    C: 3,
  })
);

//**2. List Properties.**
function listOfProperties(obj) {
  let arrOfArr = [];
  for (key in obj) {
    arrOfArr.push(key);
  }
  return arrOfArr;
}
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};

console.log(listOfProperties(student));

//**3. Merge.**
let first = { firstName: "John" };
let last = { lastName: "Smith" };

function mergeObj(obj1, obj2) {
  let newObj = {};
  newObj = { ...obj1, ...obj2 };

  return newObj;
}
console.log(mergeObj(first, last));

//**4. Switch Keys and Values.**
function copySwitch(obj) {
  let copy = {};
  for (key in obj) {
    copy[obj[key]] = key;
  }
  return copy;
}
console.log(copySwitch(student));

//**5. Return Keys and Values.**
function keysAndValues(obj) {
  let newArr = [];
  let keysArray = [];
  let valuesArray = [];
  for (key in obj) {
    keysArray.push(key);
    valuesArray.push(obj[key]);
  }
  newArr.push(keysArray);
  newArr.push(valuesArray);
  return newArr;
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
