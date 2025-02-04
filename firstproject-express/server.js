const express =require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send({message:'hello from my server'});
})
const PORT=5000;
app.listen(5000, ()=>{
    console.log('listening on port '+PORT)
})