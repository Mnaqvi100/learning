// const express = require('express');
// const app = express();
// // creating a middleware function
// function logInfo(req,res,next){
// console.log("hello from middleware");
// next();
// };

// function addData(req,res,next){
//     var person={
//         name: "mariyam",
//         city:" dewas"
//     };
//     req.person= person;
//     next();
// };
// // using middleware function
// app.use(logInfo);
// app.use(addData);
// // routing
// app.get('/',function(req,res){
// res.send("Welcome to middleware page");
// });

// app.get('/test',function(req,res){
// res.send("Name" + req.person.name + ",city"+ req)
// });
// app.listen(8000);