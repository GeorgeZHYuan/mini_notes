// var obj = {
//     name: 'George'
// };
//
// var string Obj = JSON.stringify(obj);
//
// var personString = '{"name:" "Andrew", "age": 25}';
// var person = JSON.parse(personString);

const fs = require('fs');

var original_note = {
    title: 'Some title',
    body: 'Some body'
};

var original_note_string = JSON.stringify(original_note);
fs.writeFileSync('notes.json', original_note_string);
