const mongoose = require('mongoose');
const User = require('./models/userModel');

mongoose.connect('mongodb://localhost:27017/mongoose')
.then(()=>console.log(`mongodb is connected successfully`))
.catch(()=>console.log(`mongodb connection is failed`));

const user = new User({
    name:"sriram"
})

async function saveUser(){
    try{

        const userInFo = await User.create({
            id:"pr",
            email:"Prem123@gmail.com",
            hobbies:'cricket',
          
            age:23
        });
        console.log(`userinfo is saved ${userInFo}`)
      const addGang = await User.deleteMany({name:'pr'});
      console.log(`fin ${addGang}`)
    }
    catch(err){
        console.log(`user info is failed to save ${err.message}`)
    }
}

saveUser();
