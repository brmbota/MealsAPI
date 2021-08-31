const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const mealsRoute = require("./routes/meals");
 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@meals-rest-api.ytsd8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{
    useNewUrlParser: true
});

const app= express();
//Added logger and body parser
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Handling CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method==="OPTIONS"){
        res.header("Access-Control-Allow-Methods","GET, POST");
        return res.status(200).json({});
    }
    next();
});

app.use("/meals",mealsRoute);
//Handling errors
app.use((req,res,next)=>{
    const error = new Error("Not found, wrong route!");
    error.status= 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error:{
            message:error.message
        } 
    });
});
module.exports=app;