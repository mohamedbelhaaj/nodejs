const mongoose = require('mongoose');
const User = require('../../firstproject-express/models/user');
const bcryptjs= require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: String ,
    
    email:{require:true,unique:true,type:string} ,   
    age: Number,
    password:string

})
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password =await bcryptjs.hash(this.password,10)
    }
    next();
})
userSchema.methods.comparePassword = async function(userPassword){
    return bcryptjs.compare(userPassword,this.password)
}
module.exports =mongoose.model('User',userSchema);