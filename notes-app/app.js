const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () =>{ console.log('Adding a new note!'); }
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

// Chanllenge: Add two new commands

// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

console.log(yargs.argv)
