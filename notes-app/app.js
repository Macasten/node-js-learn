// const utils = require('./utils');


// console.log(utils.name);
// console.log(utils.add(1,3));

//
// Chanllenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

const getNotes = require('./notes');

console.log( getNotes());