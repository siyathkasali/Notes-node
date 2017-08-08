console.log("This is notes JS");

const fs = require('fs');

var fetchNotes = ()=>{
    try{
    var stringtoObj = fs.readFileSync('notes-json.json');
    notes = JSON.parse(stringtoObj);
    }catch (e){
        console.log("There is no file");
    }
};

var saveNotes = ()=>{
fs.writeFileSync('notes-json.json', JSON.stringify(notes));
}

var addNote = (title,body)=>{

    var notes = [];
    var note = {
        title,
        body
    }
    
    
    var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });

    if(duplicateNotes === 0){
    notes.push(note);
    
    }else{
        console.log(`${title} already exits`);
    }
};

var listNotes = ()=>{
    console.log("this is the list of all notes");
};

var removeNote = (title)=>{
    console.log(`This ${title} is removed`);
};

var listNotes = ()=>{
    console.log("List of all notes");
};

var getNote = (title)=>{
console.log(`This Note is ${title}`);
};

module.exports = {
    addNote,
    removeNote,
    listNotes,
    getNote
}
