const fs = require('fs')
const chalk = require('chalk')


const addNote = ( title , body ) => {
  const notes = loadNotes()
  const duplicateNote = notes.find( note => note.title === title )

  if( !duplicateNote ){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('New note addad!'))

  } else { console.log(chalk.red.inverse('Note title taken!')) }
}

const removeNote = ( title ) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter( note => note.title !== title )

  if( notes.length > notesToKeep.length ){
    saveNotes(notesToKeep);
    console.log( chalk.green.inverse(`Note title:${title} removed!`))

  } else { console.log(chalk.red.inverse('Note title not found!')) }

}

const listNote = () => {
  const notes = loadNotes()
  if( notes.length > 0 )
  {
    console.log( chalk.green("Your notes: "))
    notes.forEach( element => {
      console.log("* Title: " + element.title )
    })
  } else {
    console.log( chalk.red("You have no notes!") )
  }

}

const readNote = ( title ) => {
  const notes = loadNotes()
  const theNote = notes.find( note => note.title === title )

  if( theNote ){
    console.log( chalk.green.inverse( theNote.title))
    console.log(theNote.body)
  } else { console.log(chalk.red.inverse('Note title not found!')) }

}


const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []
  }
}

const saveNotes = ( notes ) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON )
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
}