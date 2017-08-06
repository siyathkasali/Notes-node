// var obj = {
//     name : 'siyath'
// };

// var toString = JSON.stringify(obj);
// console.log(typeof(toString));
// console.log(toString);


// var string = '{"name":"siyath","age":24}';

// var toObj = JSON.parse(string);
// console.log(typeof(toObj));
// console.log(toObj);

const fs = require('fs');

var notesobj = {
    name: 'siyath',
    age:24
};

var notestoString = JSON.stringify(notesobj);

fs.writeFileSync('notes.json', notestoString);

var notestoObj = fs.readFileSync('notes.json');

var note = JSON.parse(notestoObj);

console.log(typeof note);
console.log(note.name);

