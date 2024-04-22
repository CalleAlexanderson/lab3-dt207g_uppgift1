const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dt208lab3").then(()=>{
    console.log("connected to mongoDB");
}).catch((err) =>{
    console.log("error when connecting to database: " + err);
})

const workPostSchema = new mongoose.Schema({
    companyName:{
        type: String, 
        required: true
    },
    jobTitle:{
        type: String, 
        required: true
    },
    location:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: false
    }
});

const workPost = mongoose.model("WorkPost", workPostSchema);

app.get("/workposts", async(req, res) =>{
    try {
        let result = await workPost.find({});

        return res.json(result);
    } catch(err){
        return res.status(500).json(err);
    }
})

app.post("/workposts", async(req, res) =>{
    try {
        let result = await workPost.create(req.body);

        return res.json(result);
    } catch(err){
        return res.status(400).json(err);
    }
})

app.put("/workposts/:id", async(req, res) =>{
    try {
        let result = await workPost.updateOne({_id: req.params.id}, 
            {$set: {
                "companyName": req.body.companyName,
                "jobTitle": req.body.jobTitle,
                "location": req.body.location,
                "description": req.body.description
            }});

        return res.json(result);
    } catch(err){
        return res.status(400).json(err);
    }
})

app.delete("/workposts/:id", async(req, res) =>{
    try {
        let result = await workPost.deleteOne({_id: req.params.id});

        return res.json(result);
    } catch(err){
        return res.status(400).json(err);
    }
})

app.listen(port, ()=>{
    console.log("Server is listening");
})