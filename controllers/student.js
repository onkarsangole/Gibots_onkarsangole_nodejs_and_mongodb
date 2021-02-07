const Student = require("../models/student");


// To get all students list
exports.getAllStudents = async(req, res) => {

  const students = await Student.find()
  res.json(students)
}


// To add new student in Database
exports.saveData = async(req, res) => {
  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    marks: req.body.marks
  })
  try {
    const s = await student.save()
    return res.status(201).json(s)
  } catch (error) {
    res.json(error)
  }
};


// Display list of students in ascending order of their age.
exports.sortByAge = async(req, res) => {
  const students =  await Student.find().sort({age: 1})
  res.json(students)
};



// To Display Sum of All marks

exports.TotalMark = async(req, res) => {

const students = await Student.find()
let TotalMarks = 0
  students.forEach(student =>{
    TotalMarks = TotalMarks + student.marks
  }
    )

  return res.json({"total_marks": TotalMarks})

};

