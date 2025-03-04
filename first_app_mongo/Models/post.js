const mongoose =require('mongoose')
const { Types } = require('../../firstproject-express/demo_database')
const postSchema =mongoose.Schema({
    title:String,
    description:String ,
    userId:{Type:mongoose.Schema.Types.ObjectId,ref:'User'}
})
module.exports= mongoose.model('Post',postSchema)