let person1 = {
    name: "larry",
    sex: "male",
    address: "max str. 23",
    city: "Frankfurt",
    age: 36,
    job: "Project Director",
}

console.log(person1);

//{
//    name: 'larry',
//    sex: 'male',
//    address: 'max str. 23',
//    city: 'Frankfurt',
//    age: 36,
//    job: 'Project Director'
//  }

//===========================

// **2. Get Values.** 
//Create a function that returns an array of all **values** of an object's properties.

getObjectValues = ({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  })

  console.log(Object.values(getObjectValues)); //[ 'tea', 'coffee', 'milk' ]

//===========================

  //**3. Add A Method.**
//Create an object and add a method to that object which prints the values of the objects in a string. 

let person = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
     StrMethod: function(){ 
        return  `  ${this.firstName} ${this.lastName} is a  ${this.age} year old ${this.job} in ${this.city}.`}
  };


  console.log(person.StrMethod()); 
  //  Michael Smith is a  20 year old driver in Paris.

//===========================

// **1. Convert keys and values into an array.** 
//Create a function that converts an object into an array of keys and values. 

 objectToArray=({
    A: 1,
    B: 2,
    C: 3
  })

  objectToArray2 =({
    cats: 1,
    dogs: 2, 
    turtles: 4
  }) 

   function ObjArr(obj) {
       let trans = Object.entries(obj);
       return trans
   }

   console.log(ObjArr(objectToArray)); // [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]

   console.log(ObjArr(objectToArray2)); // [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

//===========================

// **2. List Properties.**
//Create a function that returns an array of **properties** of a javascript object. 

let student = {
    name: "Mike", 
    class: "4A" ,
    course: "English",
  }

  function arrOfString(obj2) {
      const arrR = Object.keys(obj2);
      return arrR
  }
  console.log(arrOfString(student)); // [ 'name', 'class', 'course' ]
//===========================

//**3. Merge.**
//Create a function that takes two objects as its parameters and merges them together into a new object. 

let first = {firstName: "John"};
let last = {lastName: "Smith"};

let mergObj = {...first,...last};

console.log(mergObj); // { firstName: 'John', lastName: 'Smith' }
//**Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

//Answer
// it would merge but return and print only one set of the keys and values, since the properties and values are the same.
//================================

//**4. Switch Keys and Values.**
//Create a function to get a copy of an object. The copy must switch the keys and values.

let person3 = {
    name: "John", 
    job: "teacher"
  }

function changeNames(obj4){
    const objCont = {};

    for(let key in obj4){
        objCont[obj4[key]] = key;
    }
    return objCont;
};

console.log(changeNames(person3)); // { John: 'name', teacher: 'job' }


                

//let revObj = Object.assign(person3);

//console.log(revObj);

//**5. Return Keys and Values.**
//Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

function keyAndValue(obj5) {
    
    if (typeof obj5 === "object") {
         
         return  console.log([Object.keys(obj5) , Object.values(obj5)]) ; 

    }
   
}

keyAndValue({ Aa: 2, Bb: 4, Cc: 6, Dd: 8 }) 
// [ [ 'Aa', 'Bb', 'Cc', 'Dd' ], [ 2, 4, 6, 8 ] ]
