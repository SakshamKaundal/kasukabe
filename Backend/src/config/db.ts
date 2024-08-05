const mongoose = require('mongoose');

exports.connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URI)
        .then((con)=>{
            console.log(`MongoDB database connected with HOST: ${con.connection.host}`);
        })
        .catch((err: Error)=>{
            console.log(`MongoDB database connection error: ${err}`);
        })
}