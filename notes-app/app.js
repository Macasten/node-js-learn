const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0')


// Challenge: Add an option to yargs

// 1. Setup a body option for the add command.
// 2. Configure a description, make it require, and for it to be string.
// 3. Log the body value in the handler function.
// 4. Test your work!

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
  handler: ( argv ) =>{
    notes.addNote( argv.title, argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () =>{ console.log('Removing the note'); }

})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () =>{ console.log('Listing out all notes'); }

})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a notes',
  handler: () =>{ console.log('Reading a notes'); }

})

// necessario para correr o modulo yargs
yargs.parse();
