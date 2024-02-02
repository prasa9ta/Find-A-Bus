const mongoose = require("mongoose");


// database connecction
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log(`mongodb-atlas connection successfull`);
}).catch(
    (err)=>{
        console.log('error , no connection');
    }
);