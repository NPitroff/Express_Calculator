// npm packages
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// homepage
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

// post method for index.html
app.post("/", function(req, res){
  // parsed version of the request
  // console.log(req.body.num1);
  // var to hold the numbers in the input field
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  // var to add the results
  var result = num1+num2;
  res.send("Your total is "+result);
})
///////////////get & post requests for bmiCalculator.html/////////
// bmiCalculator homepage
app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");

})
//post to calculate bmi
app.post("/bmiCalculator",function(req,res){
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height) ** 2;
  var bmi = weight / height;
  res.send("Your BMI is "+bmi);
})
// port setup
app.listen(3000, function(){
  console.log("Port 3000")
})
