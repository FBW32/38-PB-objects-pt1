# Objects: Part 1

Please print each of your answers to the console.

**1. Object Person.**
Create an object named person. Loop through the object and print both the property and value of the object. 

**2. Convert keys and values into an array.** 
Create a function that converts an object into an array of keys and values. 
* Examples:
```javascript
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
```
➞ [["A", 1], ["B", 2], ["C", 3]]

```javascript
objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
```
➞ [["cats", 1], ["dogs", 2], ["turtles", 4]] 

**3. List Properties.**
Create a function that lists the properties of a javascript object. 
* Example
```javascript
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
```
* Expected output: 
["name", "class", "course"]

**4. Get Values.** 
Create a function that retrieves all values of an object's properties. 
* Examples:
```javascript
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
➞ ["tea", "coffee", "milk"] 

**5. Return Keys and Values.**
Write a program that takes an object and returns the keys and values in separate arrays.

* Examples:
```javascript
{ a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
{key: true} ➞ ["key"], [true]
```

**6. Merge.**
Create a function that takes as its parameters two objects and merges them together into a new object. 
* Example
```javascript
let first = {firstName: "John"}
let last = {lastName: "Smith"}
```
* Expected output:
```javascript
{firstName: "John", lastName: "Smith"}
```
**Bonus:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect do change either or both of the original objects? Why or why not? Comment your answers.

**7. Switch Keys and Values.**
Create a function to get a copy of an object. The copy must switch the keys and values.
* Example: 
```javascript
let person = {
  name: "John", 
  job: "teacher"
}
```
```javascript
* Expected Output: 
```javascript 
{"John": name, "teacher": job} 
```

**8. Add A Method.**
Create an object and add a method to that object which prints the values of the objects in a string. 
* Example
```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: Paris
}
```
* Example of Expected Output 
"Michael Smith is a 20 year old driver in Paris".
