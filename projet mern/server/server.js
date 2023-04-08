const express=require('express')
const mongoose=require("mongoose")
const app =express()
const cors =require('cors');
app.use(cors());
app.use(express.json())



mongoose.connect("mongodb+srv://khalid:khalidzarai@cluster0.9krmpkk.mongodb.net/users")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Error connecting to MongoDB'))
//import model user
const userModel=require("./model/clinet")

app.get("/users",async(req,res)=>{
    const user=await userModel.find()
    res.json(user)
})
app.post("/createUsers",async(req,res)=>{
   const user =req.body ;
   const newuser= new userModel(user);
     await newuser.save();
   res.json(user)
})



app.listen("8000",()=>{
    console.log("server lance !!!")
})