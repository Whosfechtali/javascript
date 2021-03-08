var express = require('express');
var app = express()
var bodyParser = require('body-parser')
const fs = require('fs');
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){
  console.log("Server is running on port 3000")
})

app.get("/",function(req, res){
  res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
  var NameofStudent = req.body.name
  var info = req.body.info
  var points = req.body.points
  let student = {
    name: NameofStudent,
    course_assignment: info,
    exercise_points: points
  };
  fs.readFile('public/database.json', function (err, data) {
      var json = JSON.parse(data);
      json.push(student);
      fs.writeFile("public/database.json", JSON.stringify(json), function(err){
        if (err) throw err;
        console.log('The data has appended successfully');
      });
  })
})
