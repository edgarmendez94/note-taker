const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const {uuidv4} = require("uuid");

router.get("/notes", (req,res) => 
    res.sendFile(path.join(__dirname,""))
);

router.get("/notes/:id", (req,res) => 
    res.sendFile(path.join(__dirname,"../public/index.html"))
);


router.post("/notes", (req,res) => 
    res.sendFile(path.join(__dirname,"../public/index.html"))
);





module.exports = router;