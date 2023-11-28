const mongoose = require("mongoose");


const busSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    route:[
        {
            place:{
                type:String,
                required:true
            },
            time:{
                type:String,
                required:true
            }
        }
    ]
});

const Bus = mongoose.model('BUS',busSchema);  //variable name should start with capital later

module.exports = Bus;