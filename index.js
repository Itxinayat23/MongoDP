var express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json());
mongoose.connect('mongodb+srv://itxinayat23:sGjWNrR840xzUwU3@smit.gle5x.mongodb.net/?retryWrites=true&w=majority&appName=Smit',{

    useNewUrlParser: true,useUnifiedTopology:true})
    .then(()=>console.log('MongoDB Connected....'))
    .catch(err=>console.log(err));

    app.listen(3001,function(){
        console.log('Example app Listening on port')
    });
// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const uri = "mongodb+srv://itxinayat23:itxinayat23@smit.gle5x.mongodb.net/?retryWrites=true&w=majority&appName=Smit";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectToMongoDB() {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB!");

//         app.listen(3000, () => console.log("Example app listening on port 3000"));
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//         console.error("Full error details:", error);
//     }
// }

// connectToMongoDB();
