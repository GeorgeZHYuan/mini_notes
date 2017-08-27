console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('Yargs', argv);

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('New note added: ');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log(`${argv.title} already exists.`);
    }
} else if (command === 'remove'){
    var pass = `Removed note: ${argv.title}`;
    var fail = `Could not find note: ${argv.title}`;
    var removeNoteResult = notes.removeNote(argv.title) ?  pass : fail;
    console.log(removeNoteResult);
} else if (command === 'list') {
    notes.getAll();

}else if (command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command note recognized');
}
