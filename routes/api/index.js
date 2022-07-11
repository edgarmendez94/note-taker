const router = require("express").Router();
const notesApi = require("./notesRoutesApi");

router.use(notesApi);



module.exports = router;