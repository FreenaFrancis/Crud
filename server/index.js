const express = require('express')  //import express
const cors = require('cors')       //import cors
const mongoose = require('mongoose') // import mongoose
const UserModel = require('./models/users') // import the usermodel from user.js


const app = express()          
app.use(cors())
app.use(express.json())  //this will send data frm frontend to json

mongoose.connect("mongodb://127.0.0.1:27017/crud");
let db = mongoose.connection 
module.exports = db;
console.log(db);

const PORT = process.env.PORT || 5000  //giving the port

// app.get("/",(req,res)=>{
//     res.json({message : "Server is running"})  //creating a api
// })

app.get("/", (req,res) =>{
    UserModel.find({})
    .then(users => res.json(users) )
    .catch(err => res.json(err))
}),

app.get('/getUSer/:id', (req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err=> res.json(err))
}),

app.put('/updateUser/:id', (req,res)=>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id},
    {name:req.body.name,
      email:req.body.email,
      age:req.body.age})
  .then(users => res.json(users))
  .catch(err=> res.json(err))
}),


app.post("/createUser", (req,res)=>{
  UserModel.create(req.body)
  .then(users => res.json(users)) 
  .catch(err => res.json(err))
}),
app.delete('/deleteUser/:id',(req,res)=>{
  const id=req.params.id;
  UserModel.findByIdAndDelete({_id: id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})




app.listen(PORT,()=>console.log("Server is running"))  //to run the port number