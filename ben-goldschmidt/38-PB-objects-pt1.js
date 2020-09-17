console.log("# Objects: Part 1")
// Please print each of your answers to the console.

console.log("")
console.log("QUESTION 1. Object Person.")
// Create an object named person. Loop through the object and print both the property and value of the object.

let person = {
    name: "Jonnathonious Lapis",
    birthPlace: "Rhodes",
    language: "American English",
    race: "To the finish!",
};

// Looop both values

for (let g in person) [
    console.log(`${g}: ${person[g]}`)
];
// name: Jonnathonious Lapis
// birthPlace: Rhodes
// language: American English
// race: To the finish!





console.log("")
console.log("QUESTION 2. Get Values.")
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```

let getObjectValues = ({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
});

let Q2values = Object.values(getObjectValues);

console.log(`Values ---> `, Q2values);
// Values --->  [ 'tea', 'coffee', 'milk' ]





console.log("")
console.log("QUESTION 3. Add A Method")
// Create an object and add a method to that object which prints the values of the objects in a string.
// * Example
// ```javascript
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".

let Q3person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    moreInfo: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`
    }
};

console.log(Q3person.moreInfo());
// Michael Smith is a 20 year old driver in Paris




console.log("")
console.log("Bonus Questions")
console.log("BONUS QUESTION 1. Convert keys and values into an array.")

// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// ```
// * Expected output: 
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// ```

let objectToArray = ({
    A: 1,
    B: 2,
    C: 3
})

let objectArray = Object.entries(objectToArray);
console.log(objectArray);
// [['A', 1], ['B', 2], ['C', 3]]



let objectToArray2 = ({
    cats: 1,
    dogs: 2,
    turtles: 4
})

let objectArray2 = Object.entries(objectToArray2);
console.log(objectArray2);
// [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]







console.log("")
console.log("BONUS QUESTION 2. List Properties.*")
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
// ```javascript
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```

let student = {
    name: "Mike",
    class: "4A",
    course: "English"
};

let studentKeys = Object.keys(student);
console.log(studentKeys);
// ['name', 'class', 'course']



console.log("")
console.log("BONUS QUESTION 3. Merge.")
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

let first = { firstName: "John" }
let last = { lastName: "Smith" }

let firstLastObject = { ...first, ...last };
console.log(firstLastObject);
// { firstName: 'John', lastName: 'Smith' }




console.log("")
console.log("BONUS QUESTION 4. Switch Keys and Values.")
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 
// ```javascript
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// ```
// * Expected Output: 
// ```javascript
// {"John": name, "teacher": job} 

let personBonus = {
    name: "John",
    job: "teacher"
}

// let newPerson = {};

// function ruturnValuesKeys(returnInput) {
//     let newPerson = {};
//     newReturn = [Object.keys(returnInput), Object.values(returnInput)];
//     console.log(newPerson);
// }

// ruturnValuesKeys(personBonus);

const object2 = Object.fromEntries(
    Object.entries(personBonus)
        .map(([key, val]) => [val, key])
);

console.log(object2);
// { John: 'name', teacher: 'job' }






console.log("")
console.log("BONUS QUESTION 5. Return Keys and Values.")
// ```
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```

let return1 = { a: 1, b: 2, c: 3 };

function ruturnKeyValues(returnInput) {
    let newReturn = [];
    newReturn = [Object.keys(returnInput), Object.values(returnInput)];
    console.log(newReturn);
}

ruturnKeyValues(return1);

// **Hint**
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
