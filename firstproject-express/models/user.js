const mongoose = require('mongoose');
const User = mongoose.model('User' , {
    name: {
        Type : String 
    },
    lastname:{
        type:String 
    },
    age:{
        type:Number
    },
    email: {
        type : String 
    },
    password:{
        type: String
    }
})
module.exports =User;