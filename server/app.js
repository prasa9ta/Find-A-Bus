const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:'./config.env'});
require('./bdConnect/conn')
app.use(express.json());
// const User = require('./model/userSchema');

// we link the router files to make our route easy ans also easy to read and understand
app.use(require('./router/auth'));


const PORT = process.env.PORT;
app.listen(PORT,(req,res)=>{
    console.log(`app is running on port no ${PORT}`);
});


// middleware

const middleware = (req,res,next)=>{
    console.log(`Hello from Middleware`);
    next();
}

// middleware();

app.get('/',(req,res)=>{
    res.send(`hello gandu`);
});

app.get('/about',middleware,(req,res)=>{
    res.send("hello this is about page");
});

app.get('/contact',(req,res)=>{
    res.send("hello this is about contact page");
});

app.get('/signup',(req,res)=>{
    res.send("hello this is about signup page");
});

app.get('/signin',(req,res)=>{
    res.send("hello this is signin page");
});