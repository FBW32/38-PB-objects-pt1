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

//bonus


