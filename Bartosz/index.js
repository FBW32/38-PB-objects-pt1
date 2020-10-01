// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 

let person = {
    name: 'Edward',
    city: 'Berlin',
    age: 77
}

for (i of Object.keys(person)) {
    console.log(`${i}: ${person[i]}`)
}

// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
//  getObjectValues= ({
//    choice1: "tea",
//    choice2: "coffee",
//    choice3: "milk"
// })

// * Expected output: 
// ["tea", "coffee", "milk"] 

function getObjectValues(obj) {
    return Object.values(obj)   
}
console.log(getObjectValues({choice1: "tea", choice2: "coffee", choice3: "milk" })); // [ 'tea', 'coffee', 'milk' ]

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }

// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".

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
// * Examples:

// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 

// * Expected output: 
// [["A", 1], ["B", 2], ["C", 3]]

let objectToArray = ({
    A: 1,
    B: 2,
    C: 3
})

let objectArray = Object.entries(objectToArray);

console.log(objectArray); // [['A', 1], ['B', 2], ['C', 3]]

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example

// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }

// * Expected output:
// ["name", "class", "course"]

let student = {
    name: "Mike",
    class: "4A",
    course: "English"
};

let studentKeys = Object.keys(student);

console.log(studentKeys);   // [ 'name', 'class', 'course' ]

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example

// let first = {firstName: "John"}
// let last = {lastName: "Smith"}

// * Expected output:
// {firstName: "John", lastName: "Smith"}

let first = { firstName: "John" }
let last = { lastName: "Smith" }

let mergeObj = { ...first, ...last };

console.log(mergeObj);  // { firstName: 'John', lastName: 'Smith' }

// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 

// let person = {
//   name: "John", 
//   job: "teacher"
// }

// * Expected Output: 
// {"John": name, "teacher": job} 

let person3 = {
    name: "John", 
    job: "teacher"
};

const object = Object.fromEntries(Object.entries(person3).map(([a, b]) => [b, a]));

console.log(object);    // { John: 'name', teacher: 'job' }


// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]

// **Hint:**
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.

let keysValues = (object) => {

    let keys = Object.keys(object);
    let values = Object.values(object);

    return [keys, values]
};

console.log(keysValues({ a: 1, b: 2, c: 3 }));      // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
console.log(keysValues({key: true}));               // [ [ 'key' ], [ true ] ]
