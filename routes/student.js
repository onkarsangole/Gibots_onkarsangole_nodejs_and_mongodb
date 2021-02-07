var express = require("express");
var router = express.Router();
const { getAllStudents, saveData, sortByAge, TotalMark } = require("../controllers/student");


// route :=  To get all students
router.get("/students", getAllStudents)

// route :=  To add new students
router.post( "/student", saveData);

// route := To Display students in ascending order by their age
router.get("/sortbyage", sortByAge);

// route := To Display total marks
router.get("/totalmarks", TotalMark);


module.exports = router;
