const validator = require('validator');
const getNotes = require('./notes');

console.log( getNotes() );

console.log( validator.isEmail('example@gmai.com'))
console.log( validator.isEmail('examplegmai.com'))

console.log( validator.isURL('http://www.npmjs.com'))
console.log( validator.isURL('http/www.npmjs.com'))