console.log("Starting App");

//Builtin Modules
const fs = require('fs');

// Own File
const notes = require('./notes.js');   


// //Third Party files
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];

console.log("Command : ", command);
console.log('Argv :', argv)

if (command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if (command === 'list'){
    notes.listNotes();
}else if (command === 'remove'){
    notes.removeNote(argv.title);
}else if (command === 'read'){
        notes.getNote(argv.title);
}else{
    console.log('Command not found');
}


