const express = require("express");
const router = express.Router();

require('../bdConnect/conn');
const User = require('../model/userSchema');
router.get('/',(req,res)=>{
    res.send('this is from router')
});



//using async await 
router.post('/addbus',async (req,res)=>{
    const {name,number,route} = req.body;

    if(!name || !number || !route){
        return res.status(422).json({error:"please fill all field properly"});
    }
    try{
        const busExist = await User.findOne({number:number});
        if(busExist){
            return res.status(422).json({error:"Bus already added"});
        }
        const bus = new User({name,number,route});
        const busAdd = await bus.save();

        if(busAdd){
            res.status(201).json({message:"bus added successfully"});
        }else{
            res.status(500).json({error:"failed to add"});
        }
    }
    catch(err){
        console.log(err);
    }
})


// using promises
// router.post('/addbus',(req,res)=>{

//     const {name,number,route} = req.body;

//     if(!name || !number || !route){
//         return res.status(422).json({error:"please fill all field properly"});
//     }

//     User.findOne({number:number}).then((busExist)=>{
//         if(busExist){
//             console.log("Bus already added")
//             return res.status(422).json({error:"Bus already added"})
//         }

//         // const user = new User(req.body);
//         const user = new User({name:name , number:number, route:route});

//         user.save().then(()=>{
//             res.status(201).json({message:"bus added successfully"});
//             console.log(name);
//         }).catch((err)=>res.status(500).json({error:"failed to add"}))
//     }).catch(err=>{console.log(err)})
//     // console.log(name,number,...route);

//     // res.send(name);
//     // console.log(req.body);
// })



// searching a bus
router.post('/search',async (req,res)=>{
    try{
        // const {source,destination} = req.body;
        // console.log(source,destination);
        const {number} = req.body;
        // res.status(202).json({source,destination});
        res.status(202).json({number});
        // const busses = await User.findOne(source); // i need to learn the quary statement for mongodb
        const busses = await User.findOne({number});
        if(busses){
            console.log(...busses.route);
        }else{
            console.log("not found");
        }

    }catch(err){
        console.log(err);
    }
})


module.exports = router;