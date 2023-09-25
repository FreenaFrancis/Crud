const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Adi',{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then(()=>{
    console.log(` mongodb connected`)
})
.catch((err)=>{
    console.log(`error while connecting mongodb :${err}`);
})

const bioSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})

const Bio = new mongoose.model('bio',bioSchema) //model creation


const create= async()=>{
    const react = new Bio({
        name:"Adithya",
        place:"knr"
    })
    const js = new Bio({
        name:"js",
        place:"knr"
    })
    const node = new Bio({
        name:"node",
        place:"knr"
    })
 const result= await Bio.insertMany([react,js,node])  
 console.log(result)
}

// create()

//get
const getDoc = async()=>{
    const result = await Bio.find({})
    .select({name:1})
    console.log(result);
}
//  getDoc()


 //  update
const update = async(i) =>{
    const res = await Bio.findByIdAndUpdate({_id:i},
        {
 $set:
    {
        'name':'freena'
    }
        })
        console.log(res);
   
}

update("64c4a730cb3efd8960ba4b9e")
  


// delete

const deledoc = async(_id) => {
    const del = await Bio.findByIdAndDelete({_id})
   console.log(del); 
}

 deledoc("64c4a730cb3efd8960ba4b9e")

const port = 8000

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})