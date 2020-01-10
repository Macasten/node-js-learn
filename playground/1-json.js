const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);

// const parseDate = JSON.parse(bookJSON)
// console.log(parseDate.author)

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON);

// console.log(data.title);

// Challenge: Work with JSON and the file system

// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const nameFile = '1-json.json'
const dataString = fs.readFileSync(nameFile).toString();
const data = JSON.parse(dataString)

data.name = "Filipe"
data.planet = "Charneca"
data.age = 33

fs.writeFileSync( nameFile, JSON.stringify(data));
