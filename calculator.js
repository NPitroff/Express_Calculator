const express = require("express");

const app = express();
// homepage
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})



// port setup
app.listen(3000, function(){
  console.log("Port 3000")
})
