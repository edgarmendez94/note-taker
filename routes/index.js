const router = require("express").Router();
const apiRoutes = require('./api');
const notes = require("./notesRoutes");

router.use('/api', apiRoutes);


router.use("/notesRoutes", notes);




module.exports = router;