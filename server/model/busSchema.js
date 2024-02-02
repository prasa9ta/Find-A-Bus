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
    route1:[
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
    ],
    route2:[
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
    ],
    running_days:[
        {
            day:{
                type:String,
                required:true
            },
            routes:[
               {
                    type:String,
                    required:true
                }
            ]
        }
    ]
});

const Bus = mongoose.model('BUS',busSchema);  //variable name should start with capital later

module.exports = Bus;