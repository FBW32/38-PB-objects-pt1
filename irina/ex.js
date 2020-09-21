// # Objects: Part 1

//https://2ality.com/2011/04/iterating-over-arrays-and-objects-in.html
//https://www.codegrepper.com/code-examples/javascript/javascript+loop+through+object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 

const person = {
   first_name: 'John',
   last_name: 'Smith',
    age : 25,
    city: 'Berlin'
}
//console.log(Object.entries(person));
/*
[ [ 'first_name', 'John' ],
  [ 'last_name', 'Smith' ],
  [ 'age', 25 ],
  [ 'city', 'Berlin' ] ]
  */
 //console.log(Object.keys(person)); //[ 'first_name', 'last_name', 'age', 'city' ]
 //console.log(Object.values(person)); //[ 'John', 'Smith', 25, 'Berlin' ]
 //---> LOOP
 for(let [key,value] of Object.entries(person)){
    console.log(`${key}: ${value}`)
};
//OR
for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`)
}
/*
first_name : John
last_name : Smith
age : 25
city : Berlin */


// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 

function getObjectValues(obj) {
    return Object.values(obj)   
}
console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  })); //[ 'tea', 'coffee', 'milk' ]
  
// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//this need to be inside the variable and in a function. 
let person2 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: 'Paris',
   printValue(){
      return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`
  }
}
  console.log(person2.printValue()); // Michael Smith is a 20 years old driver in Paris


// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 

function objectToArray(obj) {
    return Object.entries(obj);
}
console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
  })); [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]
console.log(objectToArray({
   cats: 1,
   dogs: 2, 
   turtles: 4
 }));  //[ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 

const student = {
    name: "Mike", 
    class: "4A" ,
    course: "English",
  };
  console.log(Object.keys(student)); //[ 'name', 'class', 'course' ]
//WITH ARROW FUNCTION
const arrayofProperties = (object) => {
    let keys = [];
    for(let key in object){
        keys.push(key);
    }
    return keys;
};
console.log(arrayofProperties(student)); //[ 'name', 'class', 'course' ]

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
let first = {firstName: "John"}
let last = {lastName: "Smith"}
function twoObjects (obj1, obj2) {
const newObj = Object.assign(obj1, obj2);
    return newObj
}
console.log(twoObjects(first, last)); //{ firstName: 'John', lastName: 'Smith' }
// Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
let obj1 = {firstName: "John"}
let obj2 = {lastName: "John"}
function twoObjects2(par1, par2) {
const newObj = Object.assign(par1, par2);
    return newObj
}
console.log(twoObjects2(obj1, obj2)); //{ firstName: 'John', lastName: 'John' } will print, and cosidered both object values. It will only print the obj2, only if the both object keys are the same. 

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
let person3 = {
    name: "John", 
    job: "teacher"
  };
  function swap(value){
    const objSwitch = {};
    for(let key in value){
        objSwitch[value[key]] = key;
    }
    return objSwitch;
  };
  console.log(swap(person3));//{"John": name, "teacher": job} 

// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

const objectToArray2 = (object) => {
    let firstArr = Object.keys(object);
    let secondArr = Object.values(object);
    return [firstArr, secondArr];
};
console.log(objectToArray2({ a: 1, b: 2, c: 3 })); // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
console.log(objectToArray2({key: true})); //[ [ 'key' ], [ true ] ]

//OR
const object1 = { a: 1,
     b: 2, 
     c: 3 };
  console.log(Object.getOwnPropertyNames(object1), Object.values(object1)); //[ 'a', 'b', 'c' ] [ 1, 2, 3 ]

//OR
const object2 = {key: true};
var result = Object.keys(object2).map((key) => [String(key), object2[key]]);
console.log(result); //[ [ 'key', true ] ]

// **Hint:**
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
