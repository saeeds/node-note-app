const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    console.log(chalk.green.inverse('New note added!'))
}

const removeNote = (title) => {
    console.log(chalk.green.inverse('Note removed!'))
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
}

const readNote = (title) => {
    console.log(chalk.inverse(note.title))
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}