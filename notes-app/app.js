const chalk = require('chalk');
const getNotes = require('./notes');

console.log( getNotes() );

// Challenge: Use the chalk library in your project

// 1. Install version 2.4.1 of chalk
// 2. Load chalk info applicationCache.js
// 3. Use it to print the string "Success!" to the  console in green
// 4. Test your work

// Bonus: use docs to mess around with other styles. Make text bold and inversed.

console.log(chalk.green.bold.inverse("Success!") );