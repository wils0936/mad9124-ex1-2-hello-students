'use strict'

// 1. Read the JSON file into a variable called students

const students = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

let counter = 0

students.forEach(student => {
  const {firstName} = student;
  const {lastName} = student;
  if (lastName.charAt(0) == "D"){
    counter+=1
  }
  console.log(`Hello ${firstName} ${lastName}`);

})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1


console.log(`The count of last names starting with D is ${counter}`)
