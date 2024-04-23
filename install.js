const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dt208lab3").then(() => {
    console.log("connected to mongoDB");
}).catch((err) => {
    console.log("error when connecting to database: " + err);
})

const workPostSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const workPost = mongoose.model("WorkPost", workPostSchema);

removeAllDocuments();

let arr = [{
    companyName: "Axfood",
    jobTitle: "Butiksmedarbetare",
    location: "Kungenskurva",
    description: "Plockteam och kassa arbete"
}, {
    companyName: "MCR",
    jobTitle: "Butiksbemmaning",
    location: "Stockholm",
    description: "bemannar in i olika butiker inom kassa och plockteam"
}]


async function removeAllDocuments() {
    const result = await workPost.deleteMany({});
    console.log(result);
    workPost.insertMany(arr)
}



