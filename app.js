const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes.js');
//console.log(process.argv);

//Customize yargs verion
yargs.version('1.1.0');
//create the add command
yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    }
},
   handler: function(argv) {
       console.log(`Title: ${argv.title} ,  Body:  ${argv.body}`);
   }
});

//create the remove command 
yargs.command({
   command: 'remove',
   describe: 'Remove a note',
   handler: function(){
       console.log('Removing the note');
   }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
      console.log('listing out all note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       console.log('read a note')
    }
})

yargs.parse();
//add, remove, read, list
console.log(yargs.argv);