console.log('Staring notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e){
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

module.exports = {
    addNote: addNote = (title, body) => {
        var notes = fetchNotes();
        var note = {
            title: title,
            body: body
        }
        var duplicateNotes = notes.filter((note) => note.title === title);
        if (duplicateNotes.length === 0) {
            notes.push(note);
            saveNotes(notes);
            return note;
        }
    },
    removeNote: removeNote = (title) => {
        var notes = fetchNotes();
        var remainingNotes = notes.filter((note) => note.title != title);
        saveNotes(remainingNotes);
        return notes.length !== remainingNotes.length;
    },
    getNote: getNote = (title) => {
        console.log(`getting ${title}`);
    },
    getAll: getAll = () => {
        console.log('Getting all notes');
    }
};
