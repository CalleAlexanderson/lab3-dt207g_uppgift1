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

app.get("/api", (req,res) =>{
    res.json({message: "API is working, welcome"})
})

app.listen(port, ()=>{
    console.log("Server is listening");
})