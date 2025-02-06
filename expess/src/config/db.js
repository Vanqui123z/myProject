const mongoose = require('mongoose');
const connectDB =()=> {
    mongoose.connect("mongodb://127.0.0.1:27017/my_database_dev",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Connected to MongoDB  successfully");
    })
    .catch(err=>{
        console.log("Error connecting to MongoDB:",err);
    })
}
module.exports = connectDB;