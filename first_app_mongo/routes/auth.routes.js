const express = require ('express')
const User = require('../Models/user')
const router= express.Router()
router.post('/register', async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        await user.save()
        res.status(201).send({messages:"user saved successfuly",user})
}catch(error){
    res.status(500).send({message:error.message})
}
})
module.exports= router