const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32
    },
    age: {
      type: Number,
      required: true
    },
    marks: {
      type: Number,
      required: true,
      maxlength: 100
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
