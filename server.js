const express = require('express');
const mongoose = require('mongoose');

let app = express();

//connect with mongodb server
mongoose.connect("mongodb://0.0.0.0:27017/Students",)
.then(()=> console.log('DB now is connected'))
.catch((err) => {console.error(err);})

//schema

const studentschema = new mongoose.Schema({
    name : String,
    age : Number,
    phone : String,
    address : String,

});

//convert schema to model (class)
let studentsmodel = mongoose.model("Student",studentschema);

//schema 2 
const coursesschema = new mongoose.Schema({
    name : String,
    level : String,
    duration : String,

});

//convert schema to model (class)
let coursesmodel = mongoose.model("Courses",coursesschema);


let newstudent = new studentsmodel({
    name : "Abdelrahman Selim",
    age : 20,
    phone : "01231231231",
    address : "Sharkia"
}).save();

let newstudent2 = new studentsmodel({
    name : "Andrew",
    age : 28,
    phone : "01231231232",
    address : "london , walt street"
}).save();

let newstudent3 = new studentsmodel({
    name : "Sandra",
    age : 19,
    phone : "01531231233",
    address : "San francisco , dealers st."
}).save();

let newcourse = new coursesmodel({
    name : "Programming",
    level : "Advanced",
    duration : "1 month",
}).save();

let newcourse2 = new coursesmodel({
    name : "English",
    level : "A1",
    duration : "2 months",
}).save();

let newcourse3 = new coursesmodel({
    name : "AI",
    level : "Basic",
    duration : " 20 days",
}).save();

app.get("/Students", async (req, res) => {
    let allStudents = await studentsmodel.find();
    res.status(200);
    console.log(allStudents.length);
    res.json(allStudents);
  });
  
  app.get("/Courses", async (req, res) => {
    let allCourses = await coursesmodel.find();
    res.status(200);
    console.log(allCourses.length);
    res.json(allCourses);
  });

app.listen(3000, function(){
    console.log('server is opened')
})