// 1. Object Person.
// Create an object named person. Loop through the object and print both the property and value of the object.

let person = {
    name : "donald",
    lastName: "duck",
    job: "unemployed",
    city: "Paperopoli",
    girlfriend: "daisyduck"
}

for (let g in person) {
    console.log(`${g} : ${person[g]}`);
}

// name : donald
// lastName : duck
// job : unemployed
// city : Paperopoli
// girlfriend : daisyduck



// 2. Get Values.
// Create a function that returns an array of all values of an object's properties.

// Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"] 

let getObjectValues = {
      choice1: "tea",
      choice2: "coffee",
      choice3: "milk"
    };

let myArr = [];
function getValues(obj) {
        for (let k in getObjectValues) {
            myArr.push(getObjectValues[k]); 
        }
        return myArr;
  } 
console.log(getValues(getObjectValues));  // [ 'tea', 'coffee', 'milk' ]



// 3. Add A Method.
// Create an object and add a method to that object which prints the values of the objects in a string.

// Example
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
// Example of Expected Output
// "Michael Smith is a 20 year old driver in Paris".


let person2 = {
      firstName: "Michael",
      lastName: "Smith", 
      job: "driver",
      age: 20, 
      city: "Paris",
      strValues() {
         console.log(this.firstName + " " + this.lastName + " is a " + this.job + " , he is " + this.age + " and lives in " + this.city);
      }
    }
 person2.strValues();



//  Bonus Questions
// 1. Convert keys and values into an array.
// Create a function that converts an object into an array of keys and values.

// Examples:
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 

let objectToArray = {
      cats: 1,
      dogs: 2, 
      turtles: 4
    };

 let myNewArr = [];
 function convertObject(){
 for (let g in objectToArray) {
     myNewArr.push(`${g}: ${objectToArray[g]}`)
 }
 return myNewArr;
}
 console.log(convertObject());  // [ 'cats: 1', 'dogs: 2', 'turtles: 4' ]



//  2. List Properties.
// Create a function that returns an array of properties of a javascript object.

// Example
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]

let student = {
      name: "Mike", 
      class: "4A", 
      course: "English"
    };

 let studentArr = [];
function returnProperties() {
    for (let f in student) {
        studentArr.push(f)
    }
    return studentArr;
}
console.log(returnProperties());  // [ 'name', 'class', 'course' ]



// 3. Merge.
// Create a function that takes two objects as its parameters and merges them together into a new object.

// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

let first = {firstName: "John"}
let last = {lastName: "Smith"}

function mergeObj(a, b) {
return {...a,  ...b}
}
console.log(mergeObj(first, last));   // { firstName: 'John', lastName: 'Smith' }




// 4. Switch Keys and Values.
// Create a function to get a copy of an object. The copy must switch the keys and values.

// Example:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job} 


let person3 = {
      name: "John", 
      job: "teacher"
    };

function copyObk(obj) {
   
    let newObj = Object.assign({}, ...Object.entries(obj).map(([a,b]) => ({ [b]: a })))
    obj.key = obj.value;
    return newObj;
};
console.log(copyObk(person3));  // { John: 'name', teacher: 'job' }
console.log(copyObk({name: "Gabriele", lastName: "Pepe"})); // { Gabriele: 'name', Pepe: 'lastName' }



// 5. Return Keys and Values.
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// Hint:
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.

let myObject = {
    fruit: "banana",
    veggie: "brokkoli",
    food: "pizza"
}

function arrFromObject(obj) {
    let keyArr = [];
    let valueArr = [];
    keyArr.push(Object.keys(obj));
    valueArr.push(Object.values(obj));
    finalArr = [...keyArr, ...valueArr];
return finalArr;
}
console.log(arrFromObject(myObject));  // [ [ 'fruit', 'veggie', 'food' ], [ 'banana', 'brokkoli', 'pizza' ] ]

console.log(arrFromObject(student));   // [ [ 'name', 'class', 'course' ], [ 'Mike', '4A', 'English' ] ]



