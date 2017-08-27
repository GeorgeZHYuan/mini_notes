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
        var notes = fetchNotes();
        return notes.filter((note) => note.title === title)[0];
    },
    getAll: getAll = () => {
        return fetchNotes();
    },
    logNote: logNote = (note) => {
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
};
