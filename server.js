require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();



const studentRoutes = require("./routes/student");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Database Connected");
  });

//Middlewares
app.use(bodyParser.json());


//My Routes
app.use("/api", studentRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
