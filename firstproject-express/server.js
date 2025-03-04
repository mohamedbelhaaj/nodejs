const express =require('express');
require('./demo_database');
const User = require('./models/user');
const app = express();
app.use(express.json());

app.post('/add' , (req, res)=>{
    data= req.body;
    usr = new User(data);
    usr.save()
        .then(
            (savedUser)=>{
                res.send(savedUser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
});

app.post('/create', async (req,res)=>{
    try{
        data =  req.body;
        usr =new User(data);
      savedUser = await usr.save();
      res.send(savedUser)
    }catch (error){
        res.send(error)
    }
})




app.get('/getall',(req,res)=>{
    User.find()
    .then(
        (users)=>{
            res.send(users);
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})
app.get('/all' , async (req,res)=>{


    try{
        users =await  User.find({age :21 });
        res.send(users);
    }catch(error){
        res.send(error)
    }
})

app.get('/getbyid/:id', (req,res)=>{
    myid = req.params.id;
    User.findOne({__id: myid})
    .then(
        (user) =>{
            res.send(user)
        }
    )
    .catch(
        (err)=>{
res.useChunkedEncodingByDefault(err)        }
    )
})
app.get('/byid/:id' , async (req,res)=>{
    try{
        id =req.params.id;
        user= await User.findById({_id: id})   
        res.send(user);
    }catch(error){
        res.send(error)
    }
})





app.post('/create' , async (req,res)=>{
     try{
        data = req.body;
        usr = new User(data);
        console.log(data);
        savedUser =await usr.save();
        res.send(savedUser)

     }catch (error){
        res.send(error)
     }
})
app.get('/getall' , ()=>{
    console.log('get work');
})
app.put('/update' , ()=>{
    console.log('update work ');
});
app.delete('/delete', ()=>{
    console.log('delete work');
})
app.listen(3000, ()=>{
    console.log('listening on port ');
})