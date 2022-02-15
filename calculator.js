const express = require("express");

const app = express();
// homepage
app.get("/", function(req, res){
  res.send("Hello World");
})



// port setup
app.listen(3000, function(){
  console.log("Port 3000")
})
