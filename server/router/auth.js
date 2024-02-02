const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require('../bdConnect/conn');
const Bus = require('../model/busSchema');
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send('this is from router')
});



//using async await

const middleware=(req,res,next)=>{
    res.send(`this is from middleware`);
    // next();
};


// adding a bus to the database
router.post('/addbus', async (req, res) => {
    const { name, number, route1,route2,running_days} = req.body;

    console.log(req.body);

    if (!name || !number || !route1 || !route2 || !running_days) {
        return res.status(422).json({ error: "Please fill all fields properly" });
    }

    try {
        const busExist = await Bus.find({ number: number });

        if (busExist.length > 0) {
            console.log("Bus already added");
            return res.status(422).json({ error: "Bus already added" });
        }

        const bus = new Bus({ name, number, route1, route2, running_days});
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
router.post('/search', async (req, res) => {
    try {
        const { source, destination } = req.body;
        console.log(`Source: ${source}`);
        console.log(`Destination: ${destination}`);

        const busses = await Bus.find({
            $or: [
                { "route1.place": source, "route2.place": destination },
                { "route1.place": destination, "route2.place": source },
            ],
        });

        console.log(...busses);

        const results = busses.map((bus) => {

            let sourceIndex = bus.route1.findIndex((stop)=>stop.place===source);
            let destinationIndex = bus.route1.findIndex((stop)=>stop.place===destination);
            if(sourceIndex > -1 && (sourceIndex <= destinationIndex)){
                return {
                    busName: bus.name,
                    timingAtSource: bus.route1[sourceIndex].time
                };
            }
            // else part
            sourceIndex = bus.route2.findIndex((stop)=>stop.place===source);
            destinationIndex = bus.route2.findIndex((stop)=>stop.place===destination);
            if(sourceIndex > -1 && (sourceIndex <= destinationIndex)){
                return {
                    busName: bus.name,
                    timingAtSource: bus.route2[sourceIndex].time
                };
            }
            else return{
                busName: bus.name,
                timingAtSource: null,
            }

            // 
        });

        if (results.length > 0) {
            console.log(results);
            res.json({ results });
        } else {
            console.log("Bus not found...server");
            res.json({ results });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
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
            const passMatch = await bcrypt.compare(password,emailExist.password);
            
            if(passMatch){
                const token = await emailExist.generateAuthToken();
                res.cookie('jwtoken',token,{
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly:true
                });
                console.log("user login successfull");
                res.status(200).json({message:"login successfull"});
            }else{
                console.log("invalid credential");
                res.status(400).json({message:"invalid credential"});
            }
        }else{
            console.log("user not found");
            res.status(400).json({message:"user not found"});
        }
    }
    catch(err){
        console.log(err);
    }
});





// logout 
router.get('/logout',(req,res)=>{
    res.clearCookie("jwtoken",{path:'/'});
    res.status(200).send("User logout");
});


module.exports = router;