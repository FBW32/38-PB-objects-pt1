//1
const person1 = { name: "arezoo", age: 32, citizen: "berlin" };
for (let key in person1) {
  console.log(key + " : " + person1[key]);
}
//2

const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};

function returnArray(arr) {
  const valuesArray = Object.values(arr);
  console.log(valuesArray);
}
returnArray(getObjectValues);

//3
let person = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
};

function personPrintInfo(person) {
  return `${person.firstName} ${person.lastName} is a ${person.age} ${person.job} in ${person.city}`;
}
console.log(personPrintInfo(person));

//1

let objectToArray = {
  A: 1,
  B: 2,
  C: 3,
};

let entries = Object.entries(objectToArray);
console.log(entries);

//2
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
let keys = (arr) => {
  console.log(Object.keys(arr));
};
keys(student);

//3
let first = { firstName: "John" };
let last = { lastName: "Smith" };
let newObj = (arr1, arr2) => {
  let result = { ...arr1, ...arr2 };
  return result;
};
console.log(newObj(first, last));

//4
let person3 = {
  name: "John",
  job: "teacher",
};

let res = Object.assign(
  {},
  ...Object.entries(person3).map(([prevKey, val]) => ({
    [person3[prevKey]]: prevKey,
  }))
);
console.log(res);
//5
let firstArray = { a: 1, b: 2, c: 3 };

let result = (arr) => {
  const values = Object.values(arr);
  const keys = Object.keys(arr);
  const result = [keys, values];
  return result;
};
console.log(result(firstArray));
