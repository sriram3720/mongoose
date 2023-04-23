const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        alias:"id"
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
    },
    age:{
        type:Number,
        validate:{
            validator: v => v>13,
            message:props =>`${props.value} must grater than 13`
        }
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now()
    }
})



const userModel = mongoose.model('user',userSchema);
module.exports = userModel;