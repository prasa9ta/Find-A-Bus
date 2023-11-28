const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

require('../bdConnect/conn');
const Bus = require('../model/busSchema');
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send('this is from router')
});



//using async await


// adding a bus to the database
router.post('/addbus', async (req, res) => {
    const { name, number, route } = req.body;

    console.log(req.body);

    if (!name || !number || !route) {
        return res.status(422).json({ error: "Please fill all fields properly" });
    }

    try {
        const busExist = await Bus.find({ number: number });

        if (busExist.length > 0) {
            console.log("Bus already added");
            return res.status(422).json({ error: "Bus already added" });
        }

        const bus = new Bus({ name, number, route });
        const busAdd = await bus.save();

        if (busAdd) {
            console.log("Bus added successfully");
            res.status(201).json({ message: "Bus added successfully" });
        } else {
            console.log("Failed to add");
            res.status(500).json({ error: "Failed to add" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// searching a bus
router.post('/search',async (req,res)=>{
    try{
        const {source,destination} = req.body;
        
        const busses = await Bus.find({
            "route": {
                $elemMatch: { "place": source },
                $elemMatch: { "place": destination }
            }
        },{"_id":0})
        if(busses[0]){
            console.log(busses);
            res.json({busses})
        }else{
            console.log("bus not found");
            res.json("bus not found");
        }

    }catch(err){
        console.log(err);
    }
});


// adding a user ( registraion of a new user)
router.post('/register' , async (req,res)=>{

    const {name,gender,email,phone,password} = req.body;

    if(!name || !gender || !email || !phone || !password){
        console.log("please fill all the details!!");
        return res.status(422).json({error: "Please fill all fields properly"});
    }
    try{
        const emailTaken = await User.findOne({email:email});
        if(emailTaken){
            console.log("email has taken already");
            return res.status(422).json({ error: "email has taken already" });
        }
        const phoneTaken = await User.findOne({phone:phone});
        if(phoneTaken){
            console.log("phone already registered");
            return res.status(422).json({ error: "phone already registered" });
        }

        const user = new User({name,gender,email,phone,password});
        const userAdded = await user.save();
        // console.log(userAdded);
        if (userAdded) {
            console.log("user added successfully");
            res.status(201).json({ message: "User added successfully" });
        } else {
            console.log("Failed to add");
            res.status(500).json({ error: "Failed to add" });
        }
    }
    catch(err){
        console.log(err);
    }
});


// user login
router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body;
        const emailExist = await User.findOne({email:email});
        if(emailExist){
            const passMatch = (emailExist.password===password);
            if(passMatch){
                console.log("user login successfull");
                res.status(200).json({message:"login successfull"});
            }else{
                console.log("invalid credential");
                res.json({message:"invalid credential"});
            }
        }else{
            console.log("user not found");
            res.json({message:"user not found"});
        }
    }
    catch(err){
        console.log(err);
    }
})




module.exports = router;