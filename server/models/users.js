const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({  // create schema
    name: String,
    email:String,
    age:Number,
})

 const UserModel = mongoose.model("users",UserSchema) // create model , then created a collection name called"users", then we use the schema declared 
 module.exports = UserModel // export the user model to app.js