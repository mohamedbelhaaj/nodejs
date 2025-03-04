const express= require('express');
const router = express.Router();
const User = require('../Models/user')

router.post('/',async (req,res)=>{
    try{
        const user = new User(req.body)

         await User.save()   
        res.status(201).send({message: "user saved successfuly"})
    }catch(error){
        res.status(500).send({message:"error saving user", error})
    }
})
router.get('/all', async (req,res)=>{
    try{
    const users = await User.find()
    res.status(200).send(users)
}catch(error){
res.status(500).send(error)
}
})
 router.get('/:email', async (req,res)=>{
    try{
        const email= req.params.email
        const user =await User.findOne({email})
        if (!user){
            res.status(404).send({message:"user not found"})
        }
        res.send({user})

    }catch(error){
        res.status(500).send(error)


    }
 })

 router.put('/update/:email', async (req,res)=>{
   try{ const user = await User.findOne({email:req.params.email})
    if(!user){
        res.status(404).send({message:"user not found "})
    }
    await User.findOneAndUpdate({email:req.params.email},{$set:{email:"hello@example.com"}},{new:true})
}catch(error){
    res.status(500).send(error)

}
 })
 router.put('/delete/:email', async (req,res)=>{
    try{ const user = await User.findOne({email:req.params.email})
     if(!user){
         res.status(404).send({message:"user not found "})
     }
     await User.deleteOne({email:req.params.email})
 }catch(error){
     res.status(500).send(error)
 
 }
  })
module.exports= router