const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const {v4:uuidv4} = require("uuid");



router.post("/notes", (req,res) => {
    const { title, text } = req.body;

    if (title && text)  {const newNote = {
        title,text,
        id: uuidv4(),
    };

    fs.readFile(path.join(__dirname, "../../db/db.json") , (err, note) => {
        if (err) throw err;
        const noteArr = JSON.parse(note);
        noteArr.push(newNote);


    fs.writeFile(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(noteArr,null,2),
        "utf8",
        (err) => {
            if (err) return console.err;
            res.json(newNote);
        }
    );
    });
}

});


router.get("/notes", (req,res) => 
    res.sendFile(path.join(__dirname,"../../db/db.json"))
);

router.get("/notes/:id", (req,res) => {
   const db = req.params.id;
   res.json(allNotes[db]); 
});



  


module.exports = router;