const express = require('express');
const app = express();

app.get('/',function(request, response){
response.send("hello from express.");
});

app.get('/home',function(request, response){
response.send("hello from homepage");
});

// app.get('/student/courses',function(req,res){
// res.json("welcome students");
// res.status(402).send('OK');
// });

app.get('/student/courses', function(req, res) {
  res.status(402).json({ message: "Payment required to access courses." });
});

// post method
app.post('/post_test',function(req,res){
    console.log(req.body,">>>>")
//   res.send("hello from post method");
});

app.post('/post_test1',function(req,res){
res.send("ghugiugh");
});


// put method
app.put("/all_test",function(req,res){
res.send("implementing all method");
});

//delete method
app.delete("/delete_testd",function(req,res){
    res.send("deleting methods");
});
app.listen(7000);