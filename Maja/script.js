/* 1. 
Object Person. Create an object named person. Loop through the object and print both the property and value of the object.*/



let person = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  };
  /* for (let i = 0; i <= person.length; i++) {
      console.log(Object.person[i]);
  } */
console.log(person);  // { choice1: 'tea', choice2: 'coffee', choice3: 'milk' }



/*2. 
Get Values. Create a function that returns an array of all values of an object's properties. */

function onlyValues(object1) {
    return Object.values(object1);
}
console.log(onlyValues(person)); // [ 'tea', 'coffee', 'milk' ]

/* 3. 
Add A Method. Create an object and add a method to that object which prints the values of the objects in a string. */


let person2 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    getOnlyValues: function() {
    return Object.values(person2);
    }
  }
  console.log(person2.getOnlyValues().toString());  //Michael,Smith,driver,20,Paris,function() {return Object.values(person2);}

  /* BONUS */

  /* 1. 
  Convert keys and values into an array. Create a function that converts an object into an array of keys and values. */

let object2 = {
    A: 1,
    B: 2,
    C: 3
  };
  let object3 = {
    cats: 1,
    dogs: 2, 
    turtles: 4
  };

  function objectToArray(params) {
      return Object.entries(params);
  }

console.log(objectToArray(object2)); // [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]

console.log(objectToArray(object3)); // [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

/* 2. 
List Properties. Create a function that returns an array of properties of a javascript object. */

let student = {
    name: "Mike", 
    class: "4A" ,
    course: "English"
  };
  function returnsProperties(params) {
      return Object.keys(params)
  };
  console.log(returnsProperties(student));  // [ 'name', 'class', 'course' ]

/*   3. 
  Merge. Create a function that takes two objects as its parameters and merges them together into a new object. */

let first = {firstName: "John"};
let last = {lastName: "Smith"};
let third = {lastName: "Samantha"}

function merged(params1, params2) {
    return {...params1, ...params2}
};
console.log(merged(first, last));  // { firstName: 'John', lastName: 'Smith' }

/* Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers. */

console.log(merged(last, third));  // { lastName: 'Samantha' } it's stays the last value of the same properties.

/* 4. 
Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values. */

let person3 = {
    name: "John", 
    job: "teacher"
  };

  function switched(object4) {
     return Object.keys(person3)
        .reduce((obj, key) => ({ ...obj, [person3[key]]: key }), {});
  };
  console.log(switched(person3));  // { John: 'name', teacher: 'job' }


 /*  5. 
  Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object. */
  
  /* Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises. */

let anArray = { a: 1, b: 2, c: 3 };
let anArray2 = {key: true};

function KaysAndValues(params3) {
    let newPrint = Object.keys(params3);
    //console.log(newPrint);
    let newPrint2 = Object.values(params3);
    //console.log(newPrint2);
    return [newPrint, newPrint2];
}
console.log(KaysAndValues(anArray));  // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
console.log(KaysAndValues(anArray2));  // [ [ 'key' ], [ true ] ]


 