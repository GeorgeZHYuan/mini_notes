const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOption = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'List all notes', {})
    .command('read', 'Read a note', {
        title: titleOption
    })
    .command('remove', 'Remove a note', {
        title: titleOption
    })
    .help()
    .argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('--');

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('New note added: ');
        notes.logNote(note);
    } else {
        console.log(`${argv.title} already exists.`);
    }

} else if (command === 'remove'){
    var pass = `Removed note: ${argv.title}`;
    var fail = `Could not find note: ${argv.title}`;
    var removeNoteResult = notes.removeNote(argv.title) ?  pass : fail;
    console.log(removeNoteResult);

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        console.log(note);
        notes.logNote(note);
    } else {
        console.log(`Could not find note: ${argv.title}`);
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    allNotes.forEach((note) => {
        notes.logNote(note)
        console.log('--');
    });

} else {
    console.log('Command note recognized');
}
