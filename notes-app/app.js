const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// Goal: Refactor all function

// 1. If function is a MSInputMethodContext, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work!

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    },
  },
  handler( argv ){ notes.addNote( argv.title, argv.body) }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler( argv ){ notes.removeNote( argv.title ) }

})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler(){ console.log('Listing out all notes') }

})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a notes',
  handler(){ console.log('Reading a notes') }

})

// necessario para correr o modulo yargs
yargs.parse();
