const  express = require('express');
const app = express();
const userRoutes=require('./routes/user.route')
require('dotenv').config
const mongoose=require('mongoose');
const AuthRoutes = require ('./routes/auth.routes')
app.use(express.json())
app.use('/users/',userRoutes);
app.use('/auth',AuthRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=> {console.log('connected to serve database ')}).catch(err=>{
   console.log
('Error connecting to server database')
})








const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('listeng on port ' +PORT);
})