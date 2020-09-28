// Objects: Part 1

/* 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object. */
const person = {
    name: "Lisa",
    lastName: "Willams",
    job: "Teacher"
};
for(let [key,value] of Object.entries(person)){
    console.log(`${key} : ${value}`)
}
/*
    name : Lisa
    lastName : Willams
    job : Teacher
*/

/* 2. Get Values. Create a function that returns an array of all values of an object's properties.

    Examples:
    getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
    })
    Expected output:
    ["tea", "coffee", "milk"] 
*/
function getObjectValues(obj){
    return Object.values(obj);
}
console.log(getObjectValues({
      choice1: "tea",
      choice2: "coffee",
      choice3: "milk"
})); // [ 'tea', 'coffee', 'milk' ]

/* 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

    Example
    let person = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: Paris
    }
    Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
*/
let person1 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    printOut(){
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`);

    }
}
person1.printOut(); // Michael Smith is a 20 year old driver in Paris.

// Bonus Questions
/* 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.

    Examples:
    objectToArray({
    A: 1,
    B: 2,
    C: 3
    }) 
    Expected output:
    [["A", 1], ["B", 2], ["C", 3]]
    objectToArray({
    cats: 1,
    dogs: 2, 
    turtles: 4
    }) 
    Expected output:
    [["cats", 1], ["dogs", 2], ["turtles", 4]] 
*/
const objectToArray=(obj)=>{
    return Object.entries(obj);
}

console.log(objectToArray({
      A: 1,
      B: 2,
      C: 3
})); // [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]
console.log(objectToArray({
          cats: 1,
          dogs: 2, 
          turtles: 4
})); // [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

/* 2. List Properties. Create a function that returns an array of properties of a javascript object.

    Example
    let student = {
    name: "Mike", 
    class: "4A" 
    course: "English"
    }
    Expected output:
    ["name", "class", "course"]
*/
let student = {
    name: "Mike", 
    class: "4A",
    course: "English"
};

const getProperties = (object) => {
    let resultArray = [];
    for(let key in object){
        resultArray.push(key);
    }
    return resultArray;
};
console.log(getProperties(student)); // [ 'name', 'class', 'course' ]

/* 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

    Example
    let first = {firstName: "John"}
    let last = {lastName: "Smith"}
    Expected output:
    {firstName: "John", lastName: "Smith"}
*/
let first = {firstName: "John"}
let last = {lastName: "Smith"}
let fullName = Object.assign(first, last);
console.log(fullName); // { firstName: 'John', lastName: 'Smith' }

// OR

const name = (x, o) => {
    return Object.assign(x,o);
};
const fN = {firstName: "John"};
const lN = {lastName: "Smith"};
console.log(name(fN, lN)); // { firstName: 'John', lastName: 'Smith' }

// OR

const name1 = (x, o) => {
    return { ...x, ...o};;
};
console.log(name1({ firstName: "John"}, { lastName: "Smith"},)); // { firstName: 'John', lastName: 'Smith' }

// Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
const object1 = {a: 1, b: 1, c: 1};
const object2 = {a: 2, b: 2};
const obj = Object.assign(object1, object2);
console.log(obj); // { a: 2, b: 2, c: 1 }
// The properties are overwritten by other objects that have the same properties later in the parameters order.


/* 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

    Example:
    let person = {
    name: "John", 
    job: "teacher"
    }
    Expected Output:
    {"John": name, "teacher": job}
*/
const person2 = {
    name: "John", 
    job: "teacher"
};
  
const objectReverser = (object) => {
    let objectArray = Object.entries(object);
    for(let i = 0; i < objectArray.length; i++){
      objectArray[i].reverse();
    }
    let resultObject = Object.fromEntries(objectArray);
    console.log(resultObject);
};
objectReverser(person2); // { John: 'name', teacher: 'job' }

/* 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

    Examples:
    { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
    {key: true} ➞ [["key"], [true]]
    Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
*/
const keysAndValues = (object) => {
    let keysArray = Object.keys(object);
    let valuesArray = Object.values(object);
    return [keysArray, valuesArray];
};
console.log(keysAndValues({ a: 1, b: 2, c: 3 })); // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
console.log(keysAndValues({key: true})); // [ [ 'key' ], [ true ] ]
