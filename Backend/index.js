const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const bs=require("./model");

const connectionstring='mongodb+srv://ahirjayesh:ahirjayesh@cluster0.3sqz5lf.mongodb.net/bookdb';
const app=express();

mongoose.connect(connectionstring).then(()=>{
    console.log("connected to the database");

   //for pass date in json app.use(bodyparser.json());
   app.use(bodyparser.urlencoded({extended:false}));
   app.use(express.json());
   app.use(cors());

   app.get('/bs',async(req,res)=>{
    const result= await bs.find();
    res.send(result);
   })

   app.get('/bs/:BookID',async(req,res)=>{
    const id= req.params.BookID;
    const result= await bs.findOne({BookID:id});
    res.send(result);
   })

   app.delete("/bs/:BookID",async(req,res)=>{
   const id=req.params.BookID;
   const result= await bs.deleteOne({BookID:id});
    res.send(result);
   })

   app.post("/bs",async(req,res)=>{
    const data= new bs(req.body);
    const result=await data.save();
    res.send(result);
   })

   app.put('/bs/:BookID',async(req,res)=>{
    const id= req.params.BookID;
    const result=await bs.findOneAndUpdate({BookID:id},{$set:req.body});
    res.send(result);
   })

   app.listen(1000,()=>{
    console.log("server is running");
   })
})