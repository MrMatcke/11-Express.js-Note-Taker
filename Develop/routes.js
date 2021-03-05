//use the file system module (require method)
const fs = require('fs');
const path = require('path');


//using module export
module.exports = app => {
        fs.readFile("db/db.json","utf8", (err, data) => {
                if (err) throw err;
                var notes = JSON.parse(data);


// Routing set up. using the get method route. 
        // Read the db.json and returns notes as JSON.
        app.get("/api/notes", function(req, res) { 
                res.json(notes);
            });


//Post method route for new notes. - takes in JSON input.
app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        notes.push(newNote);
        updateDb();
        return console.log("Added new note: "+newNote.title);
});


app.get("/api/notes/:id", function(req,res) {
        res.json(notes[req.params.id]);
    });

//for delete notes
app.delete("/api/notes/:id", function(req, res) {
        notes.splice(req.params.id, 1);
        updateDb();
        console.log("Deleted note with id "+req.params.id);
    });

//get/display notes
    app.get('/notes', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //display file when routes are accessed
    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    function updateDb() {
        fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
            if (err) throw err;
            return true;
        });
    }

});

}    









