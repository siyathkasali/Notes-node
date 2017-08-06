console.log("This is notes JS");

const fs = require('fs');

var addNote = (title,body)=>{
    var notes = [];
    var note = {
        title,
        body
    };

try{
var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    console.log(notes);
}catch (e){
 console.log("File ela");
}

    var duplicateNotes = notes.filter((note)=> note.title === title );
    if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
    
 };

 var listNotes = ()=>{
     console.log('Listing All Notes');
 };

var getNote = (title)=>{
    console.log("Geeting the note ", title)
}

var deleteNote = (title)=>{
    console.log(title, " Deleted");
}

 module.exports ={
     addNote,
     listNotes,
     getNote,
     deleteNote
 };
