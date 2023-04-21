const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"too small"],
        lowercase:true,
        minLength:1
    },
    hobbies:{
        type:String,
        enum:['cricket','song','football']
    }
})



const userModel = mongoose.model('user',userSchema);
module.exports = userModel;